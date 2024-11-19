package com.example.demo.commons.services;

import com.example.demo.commons.models.ImmutableModel;
import com.example.demo.commons.repositories.AbstractRepository;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public abstract class ImmutableServiceImpl<T extends ImmutableModel> implements ImmutableService<T> {
    protected AbstractRepository<T> repository;

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
