package edu.miu.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.project.commons.models.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "roles")
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(exclude = "users")
public class Role extends Model implements GrantedAuthority {
    private String name;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    private List<User> users = new ArrayList<>();

    @Override
    public String getAuthority() {
        return this.name;
    }
}
