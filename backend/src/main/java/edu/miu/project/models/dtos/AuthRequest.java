package edu.miu.project.models.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AuthRequest {
    @NotBlank(message = "email is required.")
    @Email(message = "email is invalid.")
    @Schema(description = "User's email", example = "alice@gmail.com")
    private String email;
    @NotBlank(message = "password is required.")
    @Schema(description = "User's password", example = "password")
    private String password;
}
