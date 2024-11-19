package com.example.demo.commons.services;

import com.example.demo.commons.models.MutableModel;
import com.example.demo.commons.repositories.AbstractRepository;

public abstract class MutableServiceImpl<T extends MutableModel> extends ImmutableServiceImpl<T> implements MutableService<T> {
    @Override
    public T update(T model) {
        return super.repository.save(model);
    }

    @Override
    public void delete(T model) {
        super.repository.delete(model);
    }

    @Override
    public void deleteById(Long id) {
        super.repository.deleteById(id);
    }
}
