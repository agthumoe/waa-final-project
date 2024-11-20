package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.dtos.*;
import edu.miu.project.services.AuthService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Authentication endpoints for the application")
public class AuthenticationController {
    private final AuthService authService;
    private final CustomMapper mapper;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody @Validated AuthRequest authRequest) {
        return this.authService.authenticate(authRequest);
    }

    @PostMapping("/refresh")
    @SecurityRequirement(name = "bearerAuth")
    public AuthResponse refreshToken(@RequestBody @Validated RefreshTokenRequest request) {
        return this.authService.refresh(request);
    }

    @PostMapping("/register")
    public UserDto register(@RequestBody @Validated RegistrationRequest request) {
        return this.mapper.map(this.authService.register(request), UserDto.class);
    }

    @GetMapping("/profile")
    @SecurityRequirement(name = "bearerAuth")
    public UserDto getProfile() {
        return this.mapper.map(this.authService.getCurrentUser(), UserDto.class);
    }

}
