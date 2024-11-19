package edu.miu.project.services;

import edu.miu.project.commons.services.ImmutableService;
import edu.miu.project.models.Authority;

import java.util.Optional;

public interface AuthorityService extends ImmutableService<Authority> {
    Optional<Authority> findByAuthority(String authority);
}
