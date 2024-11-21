package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Address;
import edu.miu.project.repositories.AddressRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AddressServiceImpl extends AbstractMutableService<Address> implements AddressService {
    private final AuthContext authContext;
    @Autowired
    protected AddressServiceImpl(AbstractRepository<Address> repository, AuthContext authContext) {
        super(repository);
        this.authContext = authContext;
    }

    @Override
    public List<Address> findByUserId(Long userId) {
        return ((AddressRepository) this.repository).findByUserId(userId);
    }

    @Override
    @Transactional
    public Address create(Address address) {
        // set the user of this address to the authenticated user.
        address.setUser(this.authContext.isAuthenticated().getUser());
        return super.create(address);
    }

    @Override
    @Transactional
    public Address update(Address model) {
        // validate this user is the owner of this address.
        this.authContext.isAuthenticated().hasId(model.getUser().getId());
        return super.update(model);
    }
}
