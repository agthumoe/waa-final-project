package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class CartItemDto {
    private Long quantity;
    private ProductVariantDto variant;
}
