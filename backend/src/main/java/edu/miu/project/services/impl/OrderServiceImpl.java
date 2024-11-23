package edu.miu.project.services.impl;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.services.AbstractImmutableService;
import edu.miu.project.models.*;
import edu.miu.project.models.dtos.CheckoutDto;
import edu.miu.project.models.enums.OrderStatus;
import edu.miu.project.repositories.AddressRepository;
import edu.miu.project.repositories.CartItemRepository;
import edu.miu.project.repositories.OrderItemRepository;
import edu.miu.project.repositories.OrderRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.CartService;
import edu.miu.project.services.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    private final CartItemRepository cartItemRepository;
    private final OrderItemRepository orderItemRepository;
    private static final Logger Logger = LoggerFactory.getLogger(OrderServiceImpl.class);

    @Autowired
    public OrderServiceImpl(OrderRepository repository, AddressRepository addressRepository, CustomMapper mapper, AuthContext authContext, CartService cartService, CartItemRepository cartItemRepository, OrderItemRepository orderItemRepository) {
        super(repository);
        this.addressRepository = addressRepository;
        this.mapper = mapper;
        this.authContext = authContext;
        this.cartService = cartService;
        this.cartItemRepository = cartItemRepository;
        this.orderItemRepository = orderItemRepository;
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
        order.setPaymentMethod(dto.getPaymentMethod());
        order.setShippingAddress(this.mapper.map(address, ShippingAddress.class));
        Cart cart = this.cartService.getCart();
        order.setBuyer(cart.getBuyer());
        // this logic is not very correct yet.
        order.setSeller(cart.getItems().getFirst().getVariant().getProduct().getSeller());
        double total = 0.0;
        for (CartItem cartItem : cart.getItems()) {
            Double priceAtOrder = cartItem.getVariant().getPrice();
            total += priceAtOrder * cartItem.getQuantity();
        }
        order.setTotal(total);
        order = this.repository.save(order);
        List<OrderItem> orderItems = new ArrayList<>();
        for (CartItem cartItem : cart.getItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setVariant(cartItem.getVariant());
            orderItem.setQuantity(cartItem.getQuantity());
            Variant variant = cartItem.getVariant();
            variant.setStock(variant.getStock() - cartItem.getQuantity());
            Double priceAtOrder = cartItem.getVariant().getPrice();
            orderItem.setPriceAtOrder(priceAtOrder);
            orderItem.setOrder(order);
            orderItems.add(orderItem);
        }
        this.orderItemRepository.saveAll(orderItems);
        this.cartItemRepository.deleteAllByCartId(cart.getId());
        return order;
    }

    @Override
    @Transactional
    public void updateStatus(Long orderId, OrderStatus status) {
        Order order = this.findOne(orderId).orElseThrow(() -> new HttpStatusException("Order not found", 404));
        if (!OrderStatus.PENDING.equals(order.getStatus()) && OrderStatus.CANCELLED.equals(status)) {
            throw new HttpStatusException("Order can only be cancelled when it is pending", 400);
        }
        if (OrderStatus.CANCELLED.equals(order.getStatus()) || OrderStatus.DELIVERED.equals(order.getStatus())) {
            throw new HttpStatusException("Order status cannot be updated anymore.", 400);
        }
        order.setStatus(status);
        this.repository.save(order);
    }

    @Override
    public List<OrderItem> getOrderItems(Long orderId) {
        return this.orderItemRepository.findAllByOrderId(orderId);
    }

    @Override
    public Page<Order> findAllBySellerId(Long sellerId, Pageable pageable) {
        return ((OrderRepository) this.repository).findAllBySellerId(sellerId, pageable);
    }


}
