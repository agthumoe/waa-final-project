package edu.miu.project.models;

import edu.miu.project.commons.models.ImmutableModel;
import edu.miu.project.models.enums.OrderStatus;
import edu.miu.project.models.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@EqualsAndHashCode(callSuper = true)
public class Order extends ImmutableModel {
    @Column(nullable = false, unique = true, updatable = false)
    private String orderNumber;
    private LocalDateTime orderedAt;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "payment_method", updatable = false)
    private PaymentMethod paymentMethod;
    @Column(nullable = false, updatable = false)
    private Double total;
    @ManyToOne(optional = false)
    @JoinColumn(name = "buyer_id", nullable = false, updatable = false)
    private User buyer;
    @Embedded
    private ShippingAddress shippingAddress;
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();
}
