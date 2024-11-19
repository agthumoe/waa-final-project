package edu.miu.project.securities;

public interface JwtService {
    String generateAccessToken(String email);
    String generateRefreshToken(String email);
    String getUsername(String accessToken);
    boolean validateAccessToken(String accessToken);
    boolean validateRefreshToken(String refreshToken);
}
