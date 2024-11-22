package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class UserRatingDto {
    private Long id;
    private int rating;
    private String comment;
    private String userName;
}
