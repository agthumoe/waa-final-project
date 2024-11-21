package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class OrderItemDto {
    private ProductVariantDto variant;
    private Double priceAtOrder;
    private Long quantity;
}
