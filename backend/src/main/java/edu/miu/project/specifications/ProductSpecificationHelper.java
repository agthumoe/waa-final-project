package edu.miu.project.specifications;

import edu.miu.project.models.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductSpecificationHelper {
    private final EntityManager entityManager;

    public Page<Product> findAllBySpecification(
            String name,
            String description,
            Double minPrice,
            Double maxPrice,
            Long categoryId,
            Long subCategoryId,
            Long brandId,
            Integer minStock,
            Pageable pageable
    ) {
        Specification<Product> specification = buildSpecification(name, description, minPrice, maxPrice, categoryId, subCategoryId, brandId);

        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Object[]> query = builder.createQuery(Object[].class);
        Root<Product> root = query.from(Product.class);
        // Ensure distinct results
        query.distinct(true);
        // Join tables
        var variantsJoin = root.join("variants", JoinType.LEFT);

        // Use Specification to add predicates
        Predicate predicate = specification.toPredicate(root, query, builder);

        // Add the multi-select (Product and SUM(stock))
        query.multiselect(root, builder.sum(variantsJoin.get("stock")));

        // Apply the predicate
        query.where(predicate);

        // Add GROUP BY for the product
        query.groupBy(root.get("id"));
        query.orderBy(builder.asc(root.get("id")));

        // Apply HAVING for minimum stock
        if (minStock != null) {
            query.having(builder.greaterThanOrEqualTo(builder.sum(variantsJoin.get("stock")), minStock));
        }

        // Create the typed query
        TypedQuery<Object[]> typedQuery = entityManager.createQuery(query);

        // Apply pagination
        typedQuery.setFirstResult((int) pageable.getOffset());
        typedQuery.setMaxResults(pageable.getPageSize());

        // Execute the query
        List<Object[]> result = typedQuery.getResultList();

        // Map results to DTO
        List<Product> data = result.stream()
                .map(row -> {
                    Product product = (Product) row[0];
                    Long stock = (Long) row[1];
                    product.setStock(stock);
                    return product;
                }).collect(Collectors.toList());

        // Fetch total count for pagination
        long total = getTotalCount(specification);

        // Return paginated results
        return new PageImpl<>(data, pageable, total);
    }

    private long getTotalCount(Specification<Product> specification) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> countQuery = builder.createQuery(Long.class);
        Root<Product> root = countQuery.from(Product.class);

        // Apply predicates from Specification
        Predicate predicate = specification.toPredicate(root, countQuery, builder);
        countQuery.select(builder.countDistinct(root)).where(predicate);

        return entityManager.createQuery(countQuery).getSingleResult();
    }

    private Specification<Product> buildSpecification(
            String name,
            String description,
            Double minPrice,
            Double maxPrice,
            Long categoryId,
            Long subCategoryId,
            Long brandId
    ) {
        return ((root, query, builder) -> {
            Predicate predicate = builder.conjunction();
            var subCategoryJoin = root.join("subCategory", JoinType.LEFT);
            var categoryJoin = subCategoryJoin.join("category", JoinType.LEFT);
            var brandJoin = root.join("brand", JoinType.LEFT);
            if (StringUtils.hasText(name)) {
                predicate = builder.and(predicate, builder.like(builder.lower(root.get("name")), "%" + name.toLowerCase() + "%"));
            }
            if (StringUtils.hasText(description)) {
                predicate = builder.and(predicate, builder.like(builder.lower(root.get("description")), "%" + description.toLowerCase() + "%"));
            }
            if (!ObjectUtils.isEmpty(minPrice)) {
                predicate = builder.and(predicate, builder.greaterThanOrEqualTo(root.get("basePrice"), minPrice));
            }
            if (!ObjectUtils.isEmpty(maxPrice)) {
                predicate = builder.and(predicate, builder.lessThanOrEqualTo(root.get("basePrice"), maxPrice));
            }
            if (!ObjectUtils.isEmpty(categoryId)) {
                predicate = builder.and(predicate, builder.equal(categoryJoin.get("id"), categoryId));
            }
            if (!ObjectUtils.isEmpty(subCategoryId)) {
                predicate = builder.and(predicate, builder.equal(subCategoryJoin.get("id"), subCategoryId));
            }
            if (!ObjectUtils.isEmpty(brandId)) {
                predicate = builder.and(predicate, builder.equal(brandJoin.get("id"), brandId));
            }
            return predicate;
        });
    }
}
