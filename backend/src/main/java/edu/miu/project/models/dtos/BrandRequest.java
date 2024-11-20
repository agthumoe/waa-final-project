package edu.miu.project.models.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BrandRequest {
    @NotBlank(message = "Brand name is required")
    private String name;
}
