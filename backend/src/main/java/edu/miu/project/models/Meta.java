package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import edu.miu.project.models.enums.MetaType;
import jakarta.persistence.*;
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
    @Enumerated(EnumType.STRING)
    private MetaType type;
    @ManyToMany
    private List<Product> products = new ArrayList<>();
}
