package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Brand;
import edu.miu.project.models.dtos.BrandDto;
import edu.miu.project.models.dtos.BrandRequest;
import edu.miu.project.services.BrandService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/brands")
@RequiredArgsConstructor
@Tag(name = "Brands", description = "Brand endpoints for the application")
public class BrandController {
    private final BrandService brandService;
    private final CustomMapper mapper;

    @GetMapping
    public ResponseEntity<?> findAll(Pageable pageable) {
        return ResponseEntity.ok(this.mapper.map(brandService.findAll(pageable), BrandDto.class));
    }

    @GetMapping("{id}")
    public BrandDto findOne(@PathVariable Long id) {
        return this.mapper.map(this.brandService.findOne(id).orElseThrow(() -> new HttpStatusException("Brand ID: " + id + " does not exist.", HttpStatus.NOT_FOUND)), BrandDto.class);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER')")
    @SecurityRequirement(name = "bearerAuth")
    public BrandDto create(@RequestBody BrandRequest request) {
        return this.mapper.map(this.brandService.create(this.mapper.map(request, Brand.class)), BrandDto.class);
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void update(@PathVariable Long id, @RequestBody BrandRequest request) {
        Brand brand = this.brandService.findOne(id).orElseThrow(() -> new HttpStatusException("Brand ID: " + id + " does not exist.", HttpStatus.NOT_FOUND));
        this.mapper.map(request, brand);
        this.brandService.update(brand);
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void delete(@PathVariable Long id) {
        // TODO:: remove the brand from all products
        this.brandService.deleteById(id);
    }
}
