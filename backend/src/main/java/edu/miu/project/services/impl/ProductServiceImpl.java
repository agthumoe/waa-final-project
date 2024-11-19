package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Product;
import edu.miu.project.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl extends AbstractMutableService<Product> implements ProductService {
    @Autowired
    protected ProductServiceImpl(AbstractRepository<Product> repository) {
        super(repository);
    }
}
