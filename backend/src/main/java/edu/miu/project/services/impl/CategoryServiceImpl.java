package edu.miu.project.services.impl;

import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Category;
import edu.miu.project.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl extends AbstractMutableService<Category> implements CategoryService {
}
