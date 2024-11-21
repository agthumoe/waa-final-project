package edu.miu.project.models.dtos;

import lombok.Data;

import java.util.List;

@Data
public class CartDto {
    private UserBriefDto buyer;
    private List<CartItemDto> items = List.of();
}
