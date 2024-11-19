package edu.miu.project.commons;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Role;
import edu.miu.project.repositories.RoleRepository;
import jakarta.annotation.PostConstruct;
import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomMapper extends ModelMapper {
    private RoleRepository roleRepository;

    public <T> List<T> map(List<?> list, Class<T> clazz) {
        return list.stream().map(d -> this.map(d, clazz)).collect(Collectors.toList());
    }

    public <T> Page<T> map(Page<?> page, Class<T> clazz) {
        List<T> list = this.map(page.getContent(), clazz);
        return new PageImpl<>(list, page.getPageable(), page.getTotalElements());
    }

    @PostConstruct
    public void init() {
        this.addConverter(new AbstractConverter<Role, String>() {
            @Override
            protected String convert(Role role) {
                return role.getName();
            }
        });
        this.addConverter(new AbstractConverter<String, Role>() {
            @Override
            protected Role convert(String source) {
                return roleRepository.findByNameIgnoreCase(source).orElseThrow(() -> new HttpStatusException("Role: " + source + ", not found", HttpStatus.NOT_FOUND));
            }
        });
    }
}
