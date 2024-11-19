package com.example.demo.services;

import com.example.demo.commons.services.MutableService;
import com.example.demo.models.User;

import java.util.Optional;

public interface UserService extends MutableService<User> {
    Optional<User> findByEmail(String email);
}
