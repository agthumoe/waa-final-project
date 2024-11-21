package edu.miu.project.models.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CheckoutDto {
    @NotNull
    private Long addressId;
    @NotBlank(message = "Payment method is required")
    private String paymentMethod;
}
