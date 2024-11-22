package edu.miu.project.models.dtos;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class OrderDetailsDto{
    private String orderNumber;
    private LocalDateTime orderedAt;
    private String status;
    private String paymentMethod;
    private Double total;
    private UserBriefDto user;
    private AddressDto shippingAddress;
}
