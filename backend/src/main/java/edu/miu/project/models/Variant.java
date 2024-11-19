package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import edu.miu.project.models.enums.Size;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "variants")
@Data
@EqualsAndHashCode(callSuper = true)
public class Variant extends MutableModel {
    @Column(unique = true)
    private String sku;
    @Enumerated(EnumType.STRING)
    private Size size;
    private String color;
    private String material;
    private String model;
    private Integer year;
    @Positive
    private Long stock;
    @Positive
    private Double price;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne(optional = false)
    private Product product;
    @Embedded
    private Discount discount;
}
