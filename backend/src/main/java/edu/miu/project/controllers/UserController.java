package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.User;
import edu.miu.project.models.dtos.UserDto;
import edu.miu.project.models.dtos.UserRequest;
import edu.miu.project.repositories.RoleRepository;
import edu.miu.project.services.RoleService;
import edu.miu.project.services.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Users", description = "User endpoints for the application")
public class UserController {
    private final UserService userService;
    private final CustomMapper mapper;
    private final RoleService roleService;

    @GetMapping
    public Page<UserDto> findAll(@RequestParam Pageable pageable) {
        return this.mapper.map(this.userService.findAll(pageable), UserDto.class);
    }

    @GetMapping("{id}")
    public UserDto findById(@PathVariable Long id) {
        return this.mapper.map(this.userService.findOne(id), UserDto.class);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto create(@RequestBody @Validated UserRequest request) {
        User user = mapper.map(request, User.class);
        return this.mapper.map(this.userService.create(user, request.getRoles()), UserDto.class);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        this.userService.deleteById(id);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Long id, @RequestBody @Validated UserRequest request) {
        User user = this.userService.findOne(id).orElseThrow(() -> new HttpStatusException(HttpStatus.NOT_FOUND));
        this.mapper.map(request, user);
        this.userService.update(user);
    }
}