package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends AbstractRepository<Category> {
}
