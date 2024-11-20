package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Category;
import edu.miu.project.models.SubCategory;
import edu.miu.project.repositories.CategoryRepository;
import edu.miu.project.repositories.SubCategoryRepository;
import edu.miu.project.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SubCategoryServiceImpl extends AbstractMutableService<SubCategory> implements SubCategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    protected SubCategoryServiceImpl(AbstractRepository<SubCategory> repository, CategoryRepository categoryRepository) {
        super(repository);
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Page<SubCategory> findAllByCategoryId(Long categoryId, Pageable pageable) {
        return ((SubCategoryRepository) super.repository).findAllByCategoryId(categoryId, pageable);
    }

    @Override
    @Transactional
    public SubCategory create(SubCategory subCategory, Long categoryId) {
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new HttpStatusException("Category ID: " + categoryId + " does not exist.", 404));
        subCategory.setCategory(category);
        return super.create(subCategory);
    }
}
