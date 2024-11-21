package edu.miu.project.models.dtos;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class OrderDetailsDto extends OrderDto{
    private List<OrderItemDto> items = List.of();
}
