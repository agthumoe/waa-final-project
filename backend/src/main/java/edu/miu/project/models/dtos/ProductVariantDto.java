package edu.miu.project.models.dtos;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProductVariantDto extends VariantDto {
    private String productName;
    private String productFileUrl;
}
