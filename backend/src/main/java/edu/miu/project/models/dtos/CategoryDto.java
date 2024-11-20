package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CategoryDto extends Dto {
    private String name;
}
