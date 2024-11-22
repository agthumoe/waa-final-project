package edu.miu.project.models.dtos;

import lombok.Data;

@Data
public class AddressRequest {
    private String street;
    private String city;
    private String state;
    private String zip;
    private String country;
}
