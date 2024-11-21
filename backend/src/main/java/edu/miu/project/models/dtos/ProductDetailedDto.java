package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProductDetailedDto extends Dto {
    private String name;
    private String description;
    private double basePrice;
    private Boolean enabled;
    private SubCategoryDetailsDto subCategory;
    private BrandDto brand;
    private UserBriefDto seller;
    private List<VariantDto> variants = List.of();
    private FileDto file;
}
