package edu.miu.project.models.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class ProductRequest {
    @NotBlank(message = "Name is required")
    private String name;
    private String description;
    @NotNull(message = "Base price is required")
    @Positive(message = "Base price must be positive")
    private Double basePrice;
    @NotNull(message = "Enabled is required")
    private Boolean enabled;
    @NotNull(message = "Sub category id is required")
    private Long subCategoryId;
    @NotNull(message = "Brand id is required")
    private Long brandId;
    private Long fileId;
}
