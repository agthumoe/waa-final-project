package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import edu.miu.project.models.enums.MetaType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "metas")
@Data
@EqualsAndHashCode(callSuper = true)
public class Meta extends MutableModel {
    private String name;
    private MetaType type;
    @ManyToMany
    private List<Product> products = new ArrayList<>();
}
