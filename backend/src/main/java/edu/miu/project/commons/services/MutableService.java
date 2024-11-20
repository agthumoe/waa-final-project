package edu.miu.project.commons.services;

import edu.miu.project.commons.models.MutableModel;

public interface MutableService<T extends MutableModel> extends ImmutableService<T> {
    T update(T model);

    void delete(T model);

    void deleteById(Long id);
}
