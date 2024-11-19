package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@EqualsAndHashCode(callSuper = true)
public class Product extends MutableModel {
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(name = "base_price")
    @Positive
    private double basePrice;
    @ManyToOne
    private SubCategory subCategory;
    @ManyToOne
    private Brand brand;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Variant> variants = new ArrayList<>();
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Rating> ratings = new ArrayList<>();
    @ManyToMany(mappedBy = "products")
    private List<Meta> metas = new ArrayList<>();
}
