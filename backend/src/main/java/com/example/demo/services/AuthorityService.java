package com.example.demo.services;

import com.example.demo.commons.services.ImmutableService;
import com.example.demo.models.Authority;

import java.util.Optional;

public interface AuthorityService extends ImmutableService<Authority> {
    Optional<Authority> findByAuthority(String authority);
}
