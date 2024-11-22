package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class CartDto extends Dto {
    private UserBriefDto buyer;
    private List<CartItemDto> items = new ArrayList<>();
}
