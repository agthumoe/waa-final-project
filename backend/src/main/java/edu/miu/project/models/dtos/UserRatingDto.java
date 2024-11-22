package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class UserRatingDto {
    private int rating;
    private String comment;
    private String userName;
}
