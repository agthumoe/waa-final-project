package edu.miu.project.specifications;

import edu.miu.project.models.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductSpecificationHelper {
    private final EntityManager entityManager;

    public Page<Product> findAllBySpecification(Specification<Product> specification, Integer minStock, Pageable pageable) {
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
}
