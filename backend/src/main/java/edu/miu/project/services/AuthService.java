package edu.miu.project.services;

import edu.miu.project.models.User;
import edu.miu.project.models.dtos.AuthRequest;
import edu.miu.project.models.dtos.AuthResponse;
import edu.miu.project.models.dtos.RefreshTokenRequest;
import edu.miu.project.models.dtos.RegistrationRequest;

public interface AuthService {
    AuthResponse authenticate(AuthRequest authRequest);

    AuthResponse refresh(RefreshTokenRequest request);

    User register(RegistrationRequest registrationRequest);

    void updatePassword(long userId, String newPassword);

    User getCurrentUser();
}
