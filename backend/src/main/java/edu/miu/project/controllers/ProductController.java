package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.dtos.ProductDetailedDto;
import edu.miu.project.models.dtos.ProductDto;
import edu.miu.project.services.ProductService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@Tag(name = "Products", description = "Product endpoints for the application")
public class ProductController {
    private final ProductService productService;
    private final CustomMapper mapper;

    @GetMapping
    public Page<ProductDto> getAllProducts(Pageable pageable) {
        return productService.getAllBy(pageable);
    }

    @GetMapping("{id}")
    public ProductDetailedDto getProductById(@PathVariable Long id) {
        return mapper.map(productService.findOne(id).orElseThrow(() -> new HttpStatusException("Product not found", 404)), ProductDetailedDto.class);
    }

    public Page<ProductDto> getAllProductsBySubCategory(Pageable pageable) {
        return productService.getAllBy(pageable);
    }

    public Page<ProductDto> getAllProductsByCategory(Pageable pageable) {
        return productService.getAllBy(pageable);
    }

    public Page<ProductDto> getAllProductsByBrand(Pageable pageable) {
        return productService.getAllBy(pageable);
    }
}
