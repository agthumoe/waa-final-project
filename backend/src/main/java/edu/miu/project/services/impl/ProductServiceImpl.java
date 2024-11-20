package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Product;
import edu.miu.project.models.dtos.ProductDto;
import edu.miu.project.repositories.ProductRepository;
import edu.miu.project.services.ProductService;
import edu.miu.project.specifications.ProductSpecificationHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductServiceImpl extends AbstractMutableService<Product> implements ProductService {
    private final ProductSpecificationHelper specificationHelper;

    @Autowired
    protected ProductServiceImpl(AbstractRepository<Product> repository, ProductSpecificationHelper specificationHelper) {
        super(repository);
        this.specificationHelper = specificationHelper;
    }

//    @Override
//    public Page<ProductDto> getAllBy(Pageable pageable) {
//        return ((ProductRepository) super.repository).getAllBy(pageable);
//    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Product> findOne(Long id) {
        return ((ProductRepository) super.repository).findById(id);
    }

    @Override
    public Page<Product> getAllBy(Specification<Product> specification, Integer minStock, Pageable pageable) {
        return specificationHelper.findAllBySpecification(specification, minStock, pageable);
    }
}