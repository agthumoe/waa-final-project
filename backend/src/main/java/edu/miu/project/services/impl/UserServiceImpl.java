package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.File;
import edu.miu.project.models.Role;
import edu.miu.project.models.User;
import edu.miu.project.repositories.FileRepository;
import edu.miu.project.repositories.RoleRepository;
import edu.miu.project.repositories.UserRepository;
import edu.miu.project.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl extends AbstractMutableService<User> implements UserService {
    private final RoleRepository roleRepository;
    private final FileRepository fileRepository;

    @Autowired
    protected UserServiceImpl(AbstractRepository<User> repository, RoleRepository roleRepository, FileRepository fileRepository) {
        super(repository);
        this.roleRepository = roleRepository;
        this.fileRepository = fileRepository;
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return this.getRepository().findByEmailIgnoreCase(email);
    }

    @Override
    @Transactional
    public User create(User user, List<String> roles, Long fileId) {
        List<Role> list = roles.stream().map((role) -> this.roleRepository.findByNameIgnoreCase(role).orElseThrow(() -> new HttpStatusException("Role not found: " + role, HttpStatus.NOT_FOUND))).collect(Collectors.toList());
        if (fileId != null) {
            File file = this.fileRepository.findById(fileId).orElseThrow(() -> new HttpStatusException("File not found", HttpStatus.NOT_FOUND));
            user.setFile(file);
        }
        user.setRoles(list);
        return super.create(user);
    }

    @Override
    public UserRepository getRepository() {
        return (UserRepository) super.repository;
    }
}
