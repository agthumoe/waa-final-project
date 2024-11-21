package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Address;

import java.util.List;

public interface AddressService extends MutableService<Address> {
    List<Address> findByUserId(Long userId);
}
