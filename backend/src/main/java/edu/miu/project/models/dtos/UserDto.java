package edu.miu.project.models.dtos;

import edu.miu.project.commons.dtos.Dto;
import edu.miu.project.models.File;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class UserDto extends Dto {
    private String name;
    private String email;
    private String approvedBy;
    private File file;
    private List<String> roles;
}
