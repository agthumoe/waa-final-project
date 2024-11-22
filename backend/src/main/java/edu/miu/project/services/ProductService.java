package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Product;
import edu.miu.project.models.dtos.ProductDto;
import edu.miu.project.models.dtos.ProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService extends MutableService<Product> {
    Page<Product> getAllBy(String name, String description, Double minPrice, Double maxPrice, Long categoryId, Long subCategoryId, Long brandId, Long sellerId, Integer minStock, Pageable pageable);
    Product create(Product product, Long subCategoryId, Long brandId, Long fileId);
    Product update(Long id, ProductRequest request);
}
