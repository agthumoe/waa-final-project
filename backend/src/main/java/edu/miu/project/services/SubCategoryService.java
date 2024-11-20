package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.SubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SubCategoryService extends MutableService<SubCategory> {
    Page<SubCategory> findAllByCategoryId(Long categoryId, Pageable pageable);

    SubCategory create(SubCategory subCategory, Long categoryId);
}
