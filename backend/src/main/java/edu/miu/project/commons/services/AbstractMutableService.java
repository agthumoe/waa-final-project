package edu.miu.project.commons.services;

import edu.miu.project.commons.models.MutableModel;
import edu.miu.project.commons.repositories.AbstractRepository;
import org.springframework.transaction.annotation.Transactional;

public abstract class AbstractMutableService<T extends MutableModel> extends AbstractImmutableService<T> implements MutableService<T> {
    protected AbstractMutableService(AbstractRepository<T> repository) {
        super(repository);
    }

    @Override
    @Transactional
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
