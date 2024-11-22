package edu.miu.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.project.commons.models.MutableModel;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private User user;
    @ManyToOne(optional = false)
    @JsonIgnore
    private Product product;
}
