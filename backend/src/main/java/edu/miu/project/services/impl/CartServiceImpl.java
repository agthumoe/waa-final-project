package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Cart;
import edu.miu.project.models.User;
import edu.miu.project.repositories.CartRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CartServiceImpl extends AbstractMutableService<Cart> implements CartService {
    private final AuthContext authContext;

    @Autowired
    protected CartServiceImpl(AbstractRepository<Cart> repository, AuthContext authContext) {
        super(repository);
        this.authContext = authContext;
    }

    @Override
    @Transactional
    public Cart getCart() {
        User user = this.authContext.isAuthenticated().isBuyer().getUser();
        return ((CartRepository) super.repository).findByBuyerId(user.getId()).orElseGet(() -> {
            Cart cart = new Cart();
            cart.setBuyer(user);
            return this.create(cart);
        });
    }
}
