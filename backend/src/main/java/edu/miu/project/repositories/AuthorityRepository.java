package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Authority;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorityRepository extends AbstractRepository<Authority> {
    Optional<Authority> findByNameIgnoreCase(String name);
}
