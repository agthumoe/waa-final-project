package com.example.demo.models;

import com.example.demo.commons.models.ImmutableModel;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Entity
@Table(name = "authorities")
@Data
@EqualsAndHashCode(callSuper = true)
public class Authority extends ImmutableModel implements GrantedAuthority {
    private String name;

    @ManyToMany(mappedBy = "authorities")
    private List<User> users;

    @Override
    public String getAuthority() {
        return this.name;
    }
}
