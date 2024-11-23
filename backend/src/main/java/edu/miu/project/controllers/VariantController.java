package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.Variant;
import edu.miu.project.models.dtos.VariantRequest;
import edu.miu.project.services.VariantService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Tag(name = "Product Variants", description = "Product Variant endpoints for the application")
public class VariantController {
    private final VariantService variantService;
    private final CustomMapper mapper;

    @PreAuthorize("hasAnyRole('ROLE_SELLER')")
    @SecurityRequirement(name = "bearerAuth")
    @PostMapping("/products/{productId}/variants")
    public void createVariant(@PathVariable Long productId, @RequestBody @Validated VariantRequest request) {
        variantService.addVariantToProduct(productId, this.mapper.map(request, Variant.class));
    }
}
