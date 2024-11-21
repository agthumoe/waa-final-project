package edu.miu.project.services;

import edu.miu.project.commons.services.ImmutableService;
import edu.miu.project.models.Order;
import edu.miu.project.models.dtos.CheckoutDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService extends ImmutableService<Order> {
    Page<Order> findAllByBuyerId(Long userId, Pageable pageable);
    Order create(CheckoutDto dto);
}
