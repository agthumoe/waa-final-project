package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Product;
import edu.miu.project.models.Variant;
import edu.miu.project.repositories.ProductRepository;
import edu.miu.project.services.VariantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class VariantServiceImpl extends AbstractMutableService<Variant> implements VariantService {
    private final ProductRepository productRepository;

    @Autowired
    protected VariantServiceImpl(AbstractRepository<Variant> repository, ProductRepository productRepository) {
        super(repository);
        this.productRepository = productRepository;
    }

    @Override
    @Transactional
    public void addVariantToProduct(Long productId, Variant variant) {
        variant.setSku(UUID.randomUUID().toString());
        Product product = this.productRepository.findById(productId).orElseThrow(() -> new HttpStatusException("Product not found", 404));
        variant.setProduct(product);
        this.create(variant);
    }
}
