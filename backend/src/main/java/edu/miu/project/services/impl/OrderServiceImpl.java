package edu.miu.project.services.impl;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.services.AbstractImmutableService;
import edu.miu.project.models.*;
import edu.miu.project.models.dtos.AddressRequest;
import edu.miu.project.models.dtos.CheckoutDto;
import edu.miu.project.models.enums.OrderStatus;
import edu.miu.project.models.enums.PaymentMethod;
import edu.miu.project.repositories.AddressRepository;
import edu.miu.project.repositories.OrderRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.CartService;
import edu.miu.project.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class OrderServiceImpl extends AbstractImmutableService<Order> implements OrderService {
    private final AddressRepository addressRepository;
    private final CustomMapper mapper;
    private final AuthContext authContext;
    private final CartService cartService;
    @Autowired
    public OrderServiceImpl(OrderRepository repository, AddressRepository addressRepository, CustomMapper mapper, AuthContext authContext, CartService cartService) {
        super(repository);
        this.addressRepository = addressRepository;
        this.mapper = mapper;
        this.authContext = authContext;
        this.cartService = cartService;
    }

    @Override
    public Page<Order> findAllByBuyerId(Long userId, Pageable pageable) {
        return ((OrderRepository) this.repository).findAllByBuyerId(userId, pageable);
    }

    @Override
    @Transactional
    public Order create(CheckoutDto dto) {
        Address address = addressRepository.findById(dto.getAddressId()).orElseThrow(() -> new HttpStatusException("Address not found", 404));
        Order order = this.mapper.map(dto, Order.class);
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setOrderedAt(LocalDateTime.now());
        order.setStatus(OrderStatus.PENDING);
        order.setPaymentMethod(PaymentMethod.valueOf(dto.getPaymentMethod()));
        order.setShippingAddress(this.mapper.map(address, ShippingAddress.class));
        Cart cart = this.cartService.getCart();
        order.setBuyer(cart.getBuyer());
        double total = 0.0;
        List<OrderItem> orderItems = new ArrayList<>();
        for(CartItem cartItem : cart.getItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setVariant(cartItem.getVariant());
            orderItem.setQuantity(cartItem.getQuantity());
            Double priceAtOrder = cartItem.getVariant().getPrice();
            total += priceAtOrder * cartItem.getQuantity();
            orderItem.setPriceAtOrder(priceAtOrder);
            orderItem.setOrder(order);
            orderItems.add(orderItem);
        }
        order.setItems(orderItems);
        order.setTotal(total);
        return this.create(order);
    }
}
