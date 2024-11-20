package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.SubCategory;
import edu.miu.project.models.dtos.SubCategoryDto;
import edu.miu.project.services.SubCategoryService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Tag(name = "SubCategories", description = "SubCategory endpoints for the application")
public class SubCategoryController {
    private final SubCategoryService subCategoryService;
    private final CustomMapper mapper;

    @GetMapping("/subcategories")
    public ResponseEntity<?> findAll(Pageable pageable) {
        return ResponseEntity.ok(this.mapper.map(subCategoryService.findAll(pageable), SubCategoryDto.class));
    }

    @GetMapping("/categories/{id}/subcategories")
    public ResponseEntity<?> findByCategory(@PathVariable Long id, Pageable pageable) {
        return ResponseEntity.ok(this.mapper.map(subCategoryService.findAllByCategoryId(id, pageable), SubCategoryDto.class));
    }

    @PostMapping("/categories/{id}/subcategories")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public SubCategoryDto create(@PathVariable Long id, @RequestBody SubCategoryDto subCategoryDto) {
        return this.mapper.map(this.subCategoryService.create(this.mapper.map(subCategoryDto, SubCategory.class), id), SubCategoryDto.class);
    }

    @PutMapping("/subcategories/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void update(@PathVariable Long id, @RequestBody SubCategoryDto subCategoryDto) {
        SubCategory subCategory = this.subCategoryService.findOne(id).orElseThrow(() -> new HttpStatusException("SubCategory ID: " + id + " does not exist.", 404));
        this.mapper.map(subCategoryDto, subCategory);
        this.subCategoryService.update(subCategory);
    }

    @DeleteMapping("/subcategories/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void delete(@PathVariable Long id) {
        this.subCategoryService.deleteById(id);
    }
}
