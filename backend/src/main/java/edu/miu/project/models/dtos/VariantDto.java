package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import edu.miu.project.models.Discount;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class VariantDto extends Dto {
    private String sku;
    private String size;
    private String color;
    private String material;
    private String model;
    private Integer year;
    private Long stock;
    private Double price;
    private String description;
    private Discount discount;
}
