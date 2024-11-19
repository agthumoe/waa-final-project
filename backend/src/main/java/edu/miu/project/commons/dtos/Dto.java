package edu.miu.project.commons.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Dto {
    private long id;
    private LocalDateTime createdAt;
    private String createdBy;
    private LocalDateTime lastModifiedAt;
    private String lastModifiedBy;
}
