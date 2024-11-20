package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Product;
import edu.miu.project.models.dtos.ProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService extends MutableService<Product> {
    Page<ProductDto> getAllBy(Pageable pageable);
}
