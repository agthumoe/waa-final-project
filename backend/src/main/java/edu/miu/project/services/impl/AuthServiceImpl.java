package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Authority;
import edu.miu.project.models.User;
import edu.miu.project.models.dtos.AuthRequest;
import edu.miu.project.models.dtos.AuthResponse;
import edu.miu.project.models.dtos.RefreshTokenRequest;
import edu.miu.project.models.dtos.RegistrationRequest;
import edu.miu.project.repositories.AuthorityRepository;
import edu.miu.project.repositories.UserRepository;
import edu.miu.project.securities.JwtService;
import edu.miu.project.securities.SecurityUtils;
import edu.miu.project.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthorityRepository authorityRepository;

    @Override
    public AuthResponse authenticate(AuthRequest authRequest) {
        this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        User user = this.userRepository
                .findByEmailIgnoreCase(authRequest.getEmail())
                .orElseThrow(() -> new HttpStatusException("User: " + authRequest.getEmail() + " not found", HttpStatus.NOT_FOUND));
        final String accessToken = this.jwtService.generateAccessToken(user);
        final String refreshToken = this.jwtService.generateRefreshToken(user);
        return new AuthResponse(accessToken, refreshToken);
    }

    @Override
    public AuthResponse refresh(RefreshTokenRequest request) {
        if (this.jwtService.validateRefreshToken(request.getRefreshToken())) {
            final String email = this.jwtService.getEmail(request.getRefreshToken());
            User user = this.userRepository
                    .findByEmailIgnoreCase(email)
                    .orElseThrow(() -> new HttpStatusException("User: " + email + " not found", HttpStatus.NOT_FOUND));
            final String accessToken = this.jwtService.generateAccessToken(user);
            final String refreshToken = this.jwtService.generateRefreshToken(user);
            return new AuthResponse(accessToken, refreshToken);
        }
        throw new HttpStatusException("Invalid refresh token", HttpStatus.UNAUTHORIZED);
    }

    @Override
    public User register(RegistrationRequest request) {
        final User user = new User(request.getEmail(), request.getName(), this.passwordEncoder.encode(request.getPassword()));
        final Authority authority = this.authorityRepository.findByNameIgnoreCase(request.getAuthority()).orElseThrow(() -> new HttpStatusException("Invalid authority", HttpStatus.NOT_FOUND));
        user.getAuthorities().add(authority);
        return this.userRepository.save(user);
    }

    @Override
    public void updatePassword(long userId, String newPassword) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new HttpStatusException("User not found", HttpStatus.NOT_FOUND));
        user.setPassword(passwordEncoder.encode(newPassword));
        this.userRepository.save(user);
    }

    @Override
    public User getCurrentUser() {
        final String email = SecurityUtils.getPrinciple();
        return this.userRepository.findByEmailIgnoreCase(email).orElseThrow(() -> new HttpStatusException("User not found", HttpStatus.NOT_FOUND));
    }
}