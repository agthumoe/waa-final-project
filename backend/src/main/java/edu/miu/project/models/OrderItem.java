package edu.miu.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.project.commons.models.ImmutableModel;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "order_items")
@Data
@EqualsAndHashCode(callSuper = true)
public class OrderItem extends ImmutableModel {
    @ManyToOne(optional = false)
    @JsonIgnore
    private Order order;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Variant variant;

    @Column(name = "price_at_order", nullable = false)
    private Double priceAtOrder;
    @Column(nullable = false)
    private Long quantity;
}
