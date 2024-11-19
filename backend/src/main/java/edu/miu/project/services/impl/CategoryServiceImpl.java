package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Category;
import edu.miu.project.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl extends AbstractMutableService<Category> implements CategoryService {
    @Autowired
    protected CategoryServiceImpl(AbstractRepository<Category> repository) {
        super(repository);
    }
}
