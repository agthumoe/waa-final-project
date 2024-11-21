package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class AddressDto extends Dto {
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String country;
}
