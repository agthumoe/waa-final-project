package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Cart;
import edu.miu.project.models.CartItem;
import edu.miu.project.models.User;
import edu.miu.project.repositories.CartItemRepository;
import edu.miu.project.repositories.CartRepository;
import edu.miu.project.securities.AuthContext;
import edu.miu.project.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartServiceImpl extends AbstractMutableService<Cart> implements CartService {
    private final AuthContext authContext;
    private final CartItemRepository cartItemRepository;

    @Autowired
    protected CartServiceImpl(AbstractRepository<Cart> repository, AuthContext authContext, CartItemRepository cartItemRepository) {
        super(repository);
        this.authContext = authContext;
        this.cartItemRepository = cartItemRepository;
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

    @Override
    @Transactional
    public List<CartItem> getCartItems() {
        Cart cart = this.getCart();
        return this.cartItemRepository.findAllByCartId(cart.getId());
    }
}
