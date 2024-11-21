package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.dtos.CheckoutDto;
import edu.miu.project.models.dtos.OrderDetailsDto;
import edu.miu.project.models.dtos.OrderDto;
import edu.miu.project.services.OrderService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Tag(name = "Orders", description = "Order endpoints for the application")
public class OrderController {
    private final OrderService orderService;
    private final CustomMapper mapper;

    @GetMapping("/orders")
    public Page<OrderDto> getAllOrders(Pageable pageable) {
        return this.mapper.map(this.orderService.findAll(pageable), OrderDto.class);
    }

    @GetMapping("/orders/buyers/{buyerId}")
    public Page<OrderDto> getAllByBuyer(@PathVariable Long buyerId, Pageable pageable) {
        return this.mapper.map(this.orderService.findAllByBuyerId(buyerId, pageable), OrderDto.class);
    }

    @PostMapping("/orders")
    public OrderDetailsDto createOrder(@RequestBody @Validated CheckoutDto checkoutDto) {
        return this.mapper.map(this.orderService.create(checkoutDto), OrderDetailsDto.class);
    }
}
