package edu.miu.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = false, onlyExplicitlyIncluded = true)
public class Product extends MutableModel {
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(name = "base_price")
    @Positive
    private double basePrice;
    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean enabled = true;
    @Transient
    private Long stock;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private SubCategory subCategory;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Brand brand;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "seller_id", updatable = false)
    private User seller;
    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Variant> variants = new ArrayList<>();
    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Rating> ratings = new ArrayList<>();
    @JsonIgnore
    @ManyToMany(mappedBy = "products")
    private List<Meta> metas = new ArrayList<>();
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "file_id")
    private File file;
}
