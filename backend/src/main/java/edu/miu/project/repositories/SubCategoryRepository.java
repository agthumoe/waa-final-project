package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.SubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubCategoryRepository extends AbstractRepository<SubCategory> {
    List<SubCategory> findAllByCategoryId(Long categoryId);
    Page<SubCategory> findAllByCategoryId(Long categoryId, Pageable pageable);
}
