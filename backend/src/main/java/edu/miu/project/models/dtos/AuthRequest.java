package edu.miu.project.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AuthRequest {
    @NotBlank(message = "email is required.")
    @Email(message = "email is invalid.")
    private String email;
    @NotBlank(message = "password is required.")
    private String password;
}
