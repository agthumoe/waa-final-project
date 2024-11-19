package edu.miu.project.commons.repositories;

import edu.miu.project.commons.models.ImmutableModel;
import edu.miu.project.commons.models.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractRepository<T extends Model> extends JpaRepository<T, Long> {
}
