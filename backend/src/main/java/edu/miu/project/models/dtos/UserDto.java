package edu.miu.project.models.dtos;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserDto {
    private long id;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private String name;
    private String email;
    private List<String> authorities;
}
