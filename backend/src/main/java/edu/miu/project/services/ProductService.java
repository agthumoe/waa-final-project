package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService extends MutableService<Product> {
    Page<Product> getAllBy(String name, String description, Double minPrice, Double maxPrice, Long categoryId, Long subCategoryId, Long brandId, Integer minStock, Pageable pageable);
}
