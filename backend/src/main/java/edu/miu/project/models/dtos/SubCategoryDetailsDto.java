package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class SubCategoryDetailsDto extends Dto {
    private String name;
    private CategoryDto category;
}
