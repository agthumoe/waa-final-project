package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Product;
import edu.miu.project.models.dtos.ProductDetailedDto;
import edu.miu.project.services.ProductService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@Tag(name = "Products", description = "Product endpoints for the application")
public class ProductController {
    private final ProductService productService;
    private final CustomMapper mapper;

    @GetMapping
    public Page<Product> getAllProducts(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) Long subCategoryId,
            @RequestParam(required = false) Long brandId,
            @RequestParam(required = false) Integer minStock,
            @RequestParam(required = false, defaultValue = "0") int page,
            @RequestParam(required = false, defaultValue = "10") int size) {
        return productService.getAllBy(name, description, minPrice, maxPrice, categoryId, subCategoryId, brandId, minStock, PageRequest.of(page, size));
    }

    @GetMapping("{id}")
    public ProductDetailedDto getProductById(@PathVariable Long id) {
        return mapper.map(productService.findOne(id).orElseThrow(() -> new HttpStatusException("Product not found", 404)), ProductDetailedDto.class);
    }
}
