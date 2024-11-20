package edu.miu.project.specifications;

import edu.miu.project.models.Product;
import edu.miu.project.models.Variant;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

public final class QueryBuilder {
    private QueryBuilder() {
    }

    public static Specification<Product> filterProduct(
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
