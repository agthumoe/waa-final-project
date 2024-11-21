package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class CartItemRequest {
    private Long variantId;
    private Long cartId;
    private Long quantity;
}
