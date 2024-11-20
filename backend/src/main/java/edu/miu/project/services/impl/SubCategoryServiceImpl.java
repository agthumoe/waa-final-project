package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.SubCategory;
import edu.miu.project.repositories.SubCategoryRepository;
import edu.miu.project.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryServiceImpl extends AbstractMutableService<SubCategory> implements SubCategoryService {
    @Autowired
    protected SubCategoryServiceImpl(AbstractRepository<SubCategory> repository) {
        super(repository);
    }

    @Override
    public List<SubCategory> findAllByCategoryId(Long categoryId) {
        return ((SubCategoryRepository) super.repository).findAllByCategoryId(categoryId);
    }

    @Override
    public Page<SubCategory> findAllByCategoryId(Long categoryId, Pageable pageable) {
        return ((SubCategoryRepository) super.repository).findAllByCategoryId(categoryId, pageable);
    }
}
