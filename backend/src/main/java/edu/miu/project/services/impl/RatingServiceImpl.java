package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Product;
import edu.miu.project.models.Rating;
import edu.miu.project.models.User;
import edu.miu.project.repositories.ProductRepository;
import edu.miu.project.repositories.RatingRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RatingServiceImpl extends AbstractMutableService<Rating> implements RatingService {
    private final AuthContext authContext;
    private final ProductRepository productRepository;
    @Autowired
    protected RatingServiceImpl(AbstractRepository<Rating> repository, AuthContext authContext, ProductRepository productRepository) {
        super(repository);
        this.authContext = authContext;
        this.productRepository = productRepository;
    }

    @Override
    public List<Rating> getRatingsByProductId(Long productId) {
        return ((RatingRepository) super.repository).findByProductId(productId);
    }

    @Override
    @Transactional
    public Rating create(Long productId, Rating rating) {
        User user = this.authContext.isAuthenticated().isBuyer().getUser();
        rating.setUser(user);
        Product product = this.productRepository.findById(productId).orElseThrow(() -> new HttpStatusException("Product not found", 404));
        rating.setProduct(product);
        return this.create(rating);
    }
}
