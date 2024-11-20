package edu.miu.project.services;

import edu.miu.project.models.Role;

import java.util.List;

public interface RoleService {
    Role get(String name);

    List<Role> getAll(List<String> roles);
}
