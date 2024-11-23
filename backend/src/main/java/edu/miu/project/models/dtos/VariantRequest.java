package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class VariantRequest {
    private String size;
    private String color;
    private String material;
    private String model;
    private Integer year;
    private Long stock;
    private Double price;
    private String description;
}
