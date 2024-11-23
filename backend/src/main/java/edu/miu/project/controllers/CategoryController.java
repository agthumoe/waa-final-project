package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Category;
import edu.miu.project.models.dtos.CategoryDto;
import edu.miu.project.models.dtos.CategoryRequest;
import edu.miu.project.services.CategoryService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@Tag(name = "Categories", description = "Category endpoints for the application")
public class CategoryController {
    private final CategoryService categoryService;
    private final CustomMapper mapper;

    @GetMapping
    public ResponseEntity<?> findAll(Pageable pageable) {
        return ResponseEntity.ok(this.mapper.map(categoryService.findAll(pageable), CategoryDto.class));
    }

    @PostMapping
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public CategoryDto create(@RequestBody @Validated CategoryRequest request) {
        return this.mapper.map(this.categoryService.create(this.mapper.map(request, Category.class)), CategoryDto.class);
    }

    @GetMapping("{id}")
    public CategoryDto getOne(@PathVariable Long id) {
        return this.mapper.map(this.categoryService.findOne(id).orElseThrow(() -> new HttpStatusException("Category ID: " + id + " does not exist.", HttpStatus.NOT_FOUND)), CategoryDto.class);
    }

    @PutMapping("{id}")
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public void update(@PathVariable Long id, @RequestBody @Validated CategoryRequest request) {
        Category category = this.categoryService.findOne(id).orElseThrow(() -> new HttpStatusException("Category ID: " + id + " does not exist.", HttpStatus.NOT_FOUND));
        this.mapper.map(request, category);
        this.categoryService.update(category);
    }

    @DeleteMapping("{id}")
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public void delete(@PathVariable Long id) {
        // TODO:: remove the category from all products
        this.categoryService.deleteById(id);
    }
}
