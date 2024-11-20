package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import edu.miu.project.models.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProductDto extends Dto {
    private String name;
    private String description;
    private double basePrice;
    private Boolean enabled;
    private String subCategory;
    private Long subCategoryId;
    private String category;
    private Long categoryId;
    private String brand;
    private Long brandId;
    private Long stock;

    public ProductDto() {
    }

    public ProductDto(Product product, String subCategory, Long subCategoryId, String category, Long categoryId, String brand, Long brandId, Long stock) {
        this.setId(product.getId());
        this.setCreatedAt(product.getCreatedAt());
        this.setLastModifiedAt(product.getLastModifiedAt());
        this.setCreatedBy(product.getCreatedBy());
        this.setLastModifiedBy(product.getLastModifiedBy());
        this.name = product.getName();
        this.description = product.getDescription();
        this.basePrice = product.getBasePrice();
        this.enabled = product.getEnabled();
        this.subCategory = subCategory;
        this.subCategoryId = subCategoryId;
        this.category = category;
        this.categoryId = categoryId;
        this.brand = brand;
        this.brandId = brandId;
        this.stock = stock;
    }
}
