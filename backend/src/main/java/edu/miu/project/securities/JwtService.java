package edu.miu.project.securities;

import edu.miu.project.models.User;

public interface JwtService {
    String generateAccessToken(User user);

    String generateRefreshToken(User user);

    String getEmail(String accessToken);

    boolean validateAccessToken(String accessToken);

    boolean validateRefreshToken(String refreshToken);
}
