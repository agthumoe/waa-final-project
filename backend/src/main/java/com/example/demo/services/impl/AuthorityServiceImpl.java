package com.example.demo.services.impl;

import com.example.demo.commons.services.ImmutableServiceImpl;
import com.example.demo.models.Authority;
import com.example.demo.repositories.AuthorityRepository;
import com.example.demo.services.AuthorityService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorityServiceImpl extends ImmutableServiceImpl<Authority> implements AuthorityService {
    @Override
    public Optional<Authority> findByAuthority(String authority) {
        return ((AuthorityRepository) super.repository).findByNameIgnoreCase(authority);
    }
}
