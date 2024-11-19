package edu.miu.project.services.impl;

import edu.miu.project.commons.services.ImmutableServiceImpl;
import edu.miu.project.models.Authority;
import edu.miu.project.repositories.AuthorityRepository;
import edu.miu.project.services.AuthorityService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorityServiceImpl extends ImmutableServiceImpl<Authority> implements AuthorityService {
    @Override
    public Optional<Authority> findByAuthority(String authority) {
        return ((AuthorityRepository) super.repository).findByNameIgnoreCase(authority);
    }
}
