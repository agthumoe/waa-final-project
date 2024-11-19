package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.User;
import edu.miu.project.models.dtos.UserDto;
import edu.miu.project.models.dtos.UserRequest;
import edu.miu.project.services.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class UserController {
    private final UserService userService;
    private final CustomMapper mapper;

    @GetMapping
    public Page<UserDto> findAll(Pageable pageable) {
        return this.mapper.map(this.userService.findAll(pageable), UserDto.class);
    }

    @GetMapping("{id}")
    public UserDto findById(@PathVariable Long id) {
        return this.mapper.map(this.userService.findOne(id), UserDto.class);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto create(UserRequest request) {
        return this.mapper.map(this.userService.create(mapper.map(request, User.class)), UserDto.class);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        this.userService.deleteById(id);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Long id, UserRequest request) {
        User user = this.userService.findOne(id).orElseThrow(() -> new HttpStatusException(HttpStatus.NOT_FOUND));
        this.mapper.map(request, user);
        this.userService.update(user);
    }
}
