package edu.miu.project.commons.services;

import edu.miu.project.commons.models.ImmutableModel;
import edu.miu.project.commons.repositories.AbstractRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ImmutableService<T extends ImmutableModel> {
    T create(T t);

    List<T> findAll();

    Page<T> findAll(Pageable pageable);

    Optional<T> findOne(Long id);

    boolean exists(Long id);

    AbstractRepository<T> getRepository();
}
