package edu.miu.project.models.dtos;

import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class RatingDto {
    @Positive
    private int rating;
    private String comment;
}
