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

import java.util.List;

@Entity
@Table(name = "authorities")
@Data
@EqualsAndHashCode(callSuper = true)
@ToString(exclude = "users")
public class Authority extends Model implements GrantedAuthority {
    private String name;

    @ManyToMany(mappedBy = "authorities")
    @JsonIgnore
    private List<User> users;

    @Override
    public String getAuthority() {
        return this.name;
    }
}
