package edu.miu.project.commons.services;

import edu.miu.project.commons.models.ImmutableModel;
import edu.miu.project.commons.repositories.AbstractRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public abstract class AbstractImmutableService<T extends ImmutableModel> implements ImmutableService<T> {
    protected final AbstractRepository<T> repository;

    protected AbstractImmutableService(AbstractRepository<T> repository) {
        this.repository = repository;
    }

    @Override
    public T create(T t) {
        return this.repository.save(t);
    }

    @Override
    public List<T> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Page<T> findAll(Pageable pageable) {
        return this.repository.findAll(pageable);
    }

    @Override
    public Optional<T> findOne(Long id) {
        return this.repository.findById(id);
    }

    @Override
    public boolean exists(Long id) {
        return this.repository.existsById(id);
    }

    @Override
    public AbstractRepository<T> getRepository() {
        return this.repository;
    }
}
