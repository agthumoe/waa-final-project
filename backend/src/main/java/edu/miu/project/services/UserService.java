package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.User;

import java.util.Optional;

public interface UserService extends MutableService<User> {
    Optional<User> findByEmail(String email);
}
