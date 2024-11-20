package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.SubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SubCategoryService extends MutableService<SubCategory> {
    List<SubCategory> findAllByCategoryId(Long categoryId);
    Page<SubCategory> findAllByCategoryId(Long categoryId, Pageable pageable);
}
