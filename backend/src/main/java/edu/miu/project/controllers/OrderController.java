package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.dtos.*;
import edu.miu.project.services.OrderService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Orders", description = "Order endpoints for the application")
public class OrderController {
    private final OrderService orderService;
    private final CustomMapper mapper;

    @GetMapping("/orders")
    public Page<OrderDto> getAllOrders(Pageable pageable) {
        return this.mapper.map(this.orderService.findAll(pageable), OrderDto.class);
    }

    @PreAuthorize("hasAnyRole('BUYER', 'ADMIN')")
    @GetMapping("/buyers/{buyerId}/orders")
    public Page<OrderDto> getAllByBuyer(@PathVariable Long buyerId, Pageable pageable) {
        return this.mapper.map(this.orderService.findAllByBuyerId(buyerId, pageable), OrderDto.class);
    }

    @PreAuthorize("hasAnyRole('SELLER', 'ADMIN')")
    @GetMapping("/sellers/{sellerId}/orders")
    public Page<OrderDto> getAllBySeller(@PathVariable Long sellerId, Pageable pageable) {
        return this.mapper.map(this.orderService.findAllBySellerId(sellerId, pageable), OrderDto.class);
    }

    @PreAuthorize("hasAnyRole('SELLER')")
    @PutMapping("/orders/{orderId}")
    public void updateOrder(@PathVariable Long orderId, @RequestBody @Validated OrderUpdateRequest request) {
        this.orderService.updateStatus(orderId, request.getStatus());
    }

    @GetMapping("/orders/{orderId}")
    public OrderDetailsDto getOrderDetails(@PathVariable Long orderId) {
        return this.mapper.map(this.orderService.findOne(orderId).orElseThrow(() -> new HttpStatusException("Order not found", 404)), OrderDetailsDto.class);
    }

    @PostMapping("/orders")
    @PreAuthorize("hasRole('BUYER')")
    public void createOrder(@RequestBody @Validated CheckoutDto checkoutDto) {
        this.orderService.create(checkoutDto);
    }

    @GetMapping("/orders/{orderId}/items")
    public List<OrderItemDto> getOrderItems(@PathVariable Long orderId) {
        return this.mapper.map(this.orderService.getOrderItems(orderId), OrderItemDto.class);
    }
}
