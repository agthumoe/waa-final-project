package edu.miu.project.commons.services;

import edu.miu.project.commons.models.MutableModel;

public abstract class AbstractMutableService<T extends MutableModel> extends AbstractImmutableService<T> implements MutableService<T> {
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
