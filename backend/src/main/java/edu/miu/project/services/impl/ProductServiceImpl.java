package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Brand;
import edu.miu.project.models.Product;
import edu.miu.project.models.SubCategory;
import edu.miu.project.models.User;
import edu.miu.project.repositories.*;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.securities.SecurityUtils;
import edu.miu.project.services.ProductService;
import edu.miu.project.services.UserService;
import edu.miu.project.specifications.ProductSpecificationHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductServiceImpl extends AbstractMutableService<Product> implements ProductService {
    private final ProductSpecificationHelper specificationHelper;
    private final BrandRepository brandRepository;
    private final SubCategoryRepository subCategoryRepository;
    private final AuthContext authContext;
    private final FileRepository fileRepository;

    @Autowired
    protected ProductServiceImpl(AbstractRepository<Product> repository, ProductSpecificationHelper specificationHelper, BrandRepository brandRepository, SubCategoryRepository subCategoryRepository, AuthContext authContext, FileRepository fileRepository) {
        super(repository);
        this.specificationHelper = specificationHelper;
        this.brandRepository = brandRepository;
        this.subCategoryRepository = subCategoryRepository;
        this.authContext = authContext;
        this.fileRepository = fileRepository;
    }

    @Override
    public Page<Product> getAllBy(String name, String description, Double minPrice, Double maxPrice, Long categoryId, Long subCategoryId, Long brandId, Long sellerId, Integer minStock, Pageable pageable) {
        return specificationHelper.findAllBySpecification(name, description, minPrice, maxPrice, categoryId, subCategoryId, brandId, sellerId, minStock, pageable);
    }

    @Override
    @Transactional
    public Product create(Product product, Long subCategoryId, Long brandId, Long fileId) {
        // validate and set login user as seller.
        product.setSeller(this.authContext.isAuthenticated().isSeller().isApproved().getUser());
        Brand brand = this.brandRepository.findById(brandId).orElseThrow(() -> new HttpStatusException("Brand not found", 404));
        SubCategory subCategory = this.subCategoryRepository.findById(subCategoryId).orElseThrow(() -> new HttpStatusException("Sub category not found", 404));
        product.setBrand(brand);
        product.setSubCategory(subCategory);
        if (fileId != null) {
            product.setFile(this.fileRepository.findById(fileId).orElseThrow(() -> new HttpStatusException("File not found", 404)));
        }
        return this.create(product);
    }

    @Override
    @Transactional
    public Product update(Product product, Long subCategoryId, Long brandId, Long fileId) {
        // validate login user is seller and is the owner of the product.
        this.authContext.isAuthenticated().isSeller().isApproved().hasId(product.getId());
        Brand brand = this.brandRepository.findById(brandId).orElseThrow(() -> new HttpStatusException("Brand not found", 404));
        SubCategory subCategory = this.subCategoryRepository.findById(subCategoryId).orElseThrow(() -> new HttpStatusException("Sub category not found", 404));
        product.setBrand(brand);
        product.setSubCategory(subCategory);
        if (fileId != null) {
            product.setFile(this.fileRepository.findById(fileId).orElseThrow(() -> new HttpStatusException("File not found", 404)));
        }
        return this.update(product);
    }

    @Override
    public void deleteById(Long id) {
        if (((ProductRepository) this.repository).hasAnyOrder(id)) {
            throw new HttpStatusException("This product has already an order, you can't delete it", 400);
        }
        super.deleteById(id);
    }
}