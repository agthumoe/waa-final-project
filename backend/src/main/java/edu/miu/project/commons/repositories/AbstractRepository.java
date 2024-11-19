package edu.miu.project.commons.repositories;

import edu.miu.project.commons.models.ImmutableModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractRepository<T extends ImmutableModel> extends JpaRepository<T, Long> {
}
