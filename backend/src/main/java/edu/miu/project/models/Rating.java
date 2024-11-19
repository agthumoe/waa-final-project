package edu.miu.project.models;

import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "ratings")
@Data
@EqualsAndHashCode(callSuper = true)
public class Rating extends MutableModel {
    private int rating;
    private String comment;
    @ManyToOne(optional = false)
    private User user;
    @ManyToOne(optional = false)
    private Product product;
}
