package com.example.demo.repositories;

import com.example.demo.commons.repositories.AbstractRepository;
import com.example.demo.models.Authority;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorityRepository extends AbstractRepository<Authority> {
    Optional<Authority> findByNameIgnoreCase(String name);
}
