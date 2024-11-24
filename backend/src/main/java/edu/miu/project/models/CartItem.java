package edu.miu.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "cart_items", uniqueConstraints = {
        @jakarta.persistence.UniqueConstraint(columnNames = {"cart_id", "variant_id"})
})
@Data
@EqualsAndHashCode(callSuper = true)
public class CartItem extends MutableModel {
    @ManyToOne(optional = false)
    @JsonIgnore
    private Cart cart;

    @ManyToOne(optional = false)
    @JsonIgnore
    private Variant variant;

    @Column(nullable = false)
    private Long quantity;
}
