package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Address;
import edu.miu.project.models.dtos.AddressDto;
import edu.miu.project.models.dtos.AddressRequest;
import edu.miu.project.services.AddressService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Tag(name = "Addresses", description = "Address endpoints for the application")
public class AddressController {
    private final AddressService addressService;
    private final CustomMapper mapper;

    @SecurityRequirement(name = "bearerAuth")
    @GetMapping("/users/{userId}/addresses")
    public List<AddressDto> findByUserId(@PathVariable Long userId) {
        return this.mapper.map(addressService.findByUserId(userId), AddressDto.class);
    }

    @PostMapping("/addresses")
    @SecurityRequirement(name = "bearerAuth")
    public AddressDto create(@RequestBody @Validated AddressRequest address) {
        return this.mapper.map(addressService.create(this.mapper.map(address, Address.class)), AddressDto.class);
    }

    @SecurityRequirement(name = "bearerAuth")
    @GetMapping("/addresses/{id}")
    public Address getOne(@PathVariable Long id) {
        return addressService.findOne(id).orElseThrow(() -> new HttpStatusException("Address not found", 404));
    }

    @SecurityRequirement(name = "bearerAuth")
    @PutMapping("/addresses/{id}")
    public AddressDto update(@PathVariable Long id, @RequestBody @Validated AddressRequest address) {
        Address addressToUpdate = addressService.findOne(id).orElseThrow();
        this.mapper.map(address, addressToUpdate);
        return this.mapper.map(addressService.update(addressToUpdate), AddressDto.class);
    }

    @SecurityRequirement(name = "bearerAuth")
    @DeleteMapping("/addresses/{id}")
    public void delete(@PathVariable Long id) {
        addressService.deleteById(id);
    }
}
