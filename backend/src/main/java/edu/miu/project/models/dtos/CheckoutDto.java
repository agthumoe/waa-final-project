package edu.miu.project.models.dtos;

import edu.miu.project.models.enums.PaymentMethod;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CheckoutDto {
    @NotNull
    private Long addressId;
    @NotNull
    private PaymentMethod paymentMethod;
}
