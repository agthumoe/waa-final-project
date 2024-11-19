package edu.miu.project.services.impl;

import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.User;
import edu.miu.project.repositories.UserRepository;
import edu.miu.project.services.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl extends AbstractMutableService<User> implements UserService {
    @Override
    public Optional<User> findByEmail(String email) {
        return this.getRepository().findByEmailIgnoreCase(email);
    }

    @Override
    public UserRepository getRepository() {
        return (UserRepository) super.repository;
    }
}
