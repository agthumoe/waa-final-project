package com.example.demo.repositories;

import com.example.demo.commons.repositories.AbstractRepository;
import com.example.demo.models.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends AbstractRepository<User> {
    Optional<User> findByEmailIgnoreCase(String email);
}
