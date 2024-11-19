package com.example.demo.commons.services;

import com.example.demo.commons.models.MutableModel;

public interface MutableService<T extends MutableModel> extends ImmutableService<T> {
    T update(T model);
    void delete(T model);
    void deleteById(Long id);
}
