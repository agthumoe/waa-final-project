package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Role;
import edu.miu.project.repositories.RoleRepository;
import edu.miu.project.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public Role get(String name) {
        return this.roleRepository.findByNameIgnoreCase(name).orElseThrow(() -> new HttpStatusException("Role not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public List<Role> getAll(List<String> roles) {
        return roles.stream().map(this::get).collect(Collectors.toList());
    }
}
