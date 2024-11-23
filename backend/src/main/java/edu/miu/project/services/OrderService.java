package edu.miu.project.services;

import edu.miu.project.commons.services.ImmutableService;
import edu.miu.project.models.Order;
import edu.miu.project.models.OrderItem;
import edu.miu.project.models.dtos.CheckoutDto;
import edu.miu.project.models.enums.OrderStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface OrderService extends ImmutableService<Order> {
    Page<Order> findAllByBuyerId(Long userId, Pageable pageable);
    Order create(CheckoutDto dto);
    void updateStatus(Long orderId, OrderStatus status);
    List<OrderItem> getOrderItems(Long orderId);
    Page<Order> findAllBySellerId(Long sellerId, Pageable pageable);
    long countBySellerId(Long sellerId);
}
