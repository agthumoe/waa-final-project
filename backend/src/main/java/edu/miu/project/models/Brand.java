package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "brands")
@Data
@EqualsAndHashCode(callSuper = true)
public class Brand extends MutableModel {
    private String name;
    @OneToMany(mappedBy = "brand")
    private List<Product> products = new ArrayList<>();
}
