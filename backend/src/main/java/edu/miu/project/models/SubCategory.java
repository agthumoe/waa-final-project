package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sub_categories")
@Data
@EqualsAndHashCode(callSuper = true)
public class SubCategory extends MutableModel {
    private String name;

    @ManyToOne
    private Category category;

    @OneToMany(mappedBy = "subCategory")
    private List<Product> products = new ArrayList<>();
}
