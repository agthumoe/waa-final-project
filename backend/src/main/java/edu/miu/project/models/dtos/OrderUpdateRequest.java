package edu.miu.project.models.dtos;

import edu.miu.project.models.enums.OrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class OrderUpdateRequest {
    @NotNull
    private OrderStatus status;
}
