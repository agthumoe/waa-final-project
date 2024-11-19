package com.example.demo.services.impl;

import com.example.demo.commons.services.MutableServiceImpl;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl extends MutableServiceImpl<User> implements UserService {
    @Override
    public Optional<User> findByEmail(String email) {
        return this.getRepository().findByEmailIgnoreCase(email);
    }

    @Override
    public UserRepository getRepository() {
        return (UserRepository) super.repository;
    }
}
