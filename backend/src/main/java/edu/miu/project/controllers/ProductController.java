package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Product;
import edu.miu.project.models.dtos.ProductDetailedDto;
import edu.miu.project.models.dtos.ProductDto;
import edu.miu.project.models.dtos.ProductRequest;
import edu.miu.project.services.ProductService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@Tag(name = "Products", description = "Product endpoints for the application")
public class ProductController {
    private final ProductService productService;
    private final CustomMapper mapper;

    @GetMapping
    public Page<ProductDto> getAllProducts(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) Long subCategoryId,
            @RequestParam(required = false) Long brandId,
            @RequestParam(required = false) Long sellerId,
            @RequestParam(required = false) Integer minStock,
            @RequestParam(required = false, defaultValue = "0") int page,
            @RequestParam(required = false, defaultValue = "10") int size) {
        return this.mapper.map(productService.getAllBy(name, description, minPrice, maxPrice, categoryId, subCategoryId, brandId, sellerId, minStock, PageRequest.of(page, size)), ProductDto.class);
    }

    @GetMapping("{id}")
    public ProductDetailedDto getProductById(@PathVariable Long id) {
        return mapper.map(productService.findOne(id).orElseThrow(() -> new HttpStatusException("Product not found", 404)), ProductDetailedDto.class);
    }

    @PostMapping
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasAnyRole('ROLE_SELLER')")
    public ProductDto createProduct(@RequestBody @Validated ProductRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setBasePrice(request.getBasePrice());
        product.setEnabled(request.getEnabled());
        return mapper.map(productService.create(product, request.getSubCategoryId(), request.getBrandId(), request.getFileId()), ProductDto.class);
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAnyRole('ROLE_SELLER')")
    @SecurityRequirement(name = "bearerAuth")
    public void updateProduct(@PathVariable Long id, @RequestBody @Validated ProductRequest request) {
       productService.update(id, request);
    }

    @DeleteMapping("{id}")
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER')")
    public void deleteProduct(@PathVariable Long id) {
        this.productService.deleteById(id);
    }
}
