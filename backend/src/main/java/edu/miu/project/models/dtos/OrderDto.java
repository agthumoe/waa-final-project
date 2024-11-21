package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import edu.miu.project.models.ShippingAddress;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class OrderDto extends Dto {
    private String orderNumber;
    private LocalDateTime orderedAt;
    private String status;
    private String paymentMethod;
    private Double total;
    private UserBriefDto user;
    private AddressDto shippingAddress;
}
