package edu.miu.project.models.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SubCategoryRequest {
    @NotBlank(message = "SubCategory name is required")
    private String name;
}
