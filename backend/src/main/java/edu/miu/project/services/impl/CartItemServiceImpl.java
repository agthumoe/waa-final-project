package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Cart;
import edu.miu.project.models.CartItem;
import edu.miu.project.models.Variant;
import edu.miu.project.repositories.CartItemRepository;
import edu.miu.project.repositories.CartRepository;
import edu.miu.project.repositories.VariantRepository;
import edu.miu.project.services.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CartItemServiceImpl extends AbstractMutableService<CartItem> implements CartItemService {
    private final CartRepository cartRepository;
    private final VariantRepository variantRepository;

    @Autowired
    public CartItemServiceImpl(AbstractRepository<CartItem> repository, CartRepository cartRepository, VariantRepository variantRepository) {
        super(repository);
        this.cartRepository = cartRepository;
        this.variantRepository = variantRepository;
    }

    @Override
    @Transactional
    public void addItemsToCart(Long cartId, Long variantId, Long quantity) {
        // check if cart with variant already exists
        Optional<CartItem> optional = ((CartItemRepository) super.repository).findByCartIdAndVariantId(cartId, variantId);
        if (optional.isPresent()) {
            CartItem cartItem = optional.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            this.update(cartItem);
        } else {
            Cart cart = this.cartRepository.findById(cartId).orElseThrow(() -> new HttpStatusException("Cart not found", 404));
            Variant variant = this.variantRepository.findById(variantId).orElseThrow(() -> new HttpStatusException("Variant not found", 404));
            CartItem cartItem = new CartItem();
            cartItem.setQuantity(quantity);
            cartItem.setVariant(variant);
            cartItem.setCart(cart);
            this.create(cartItem);
        }
    }

    @Override
    @Transactional
    public void updateCartItem(Long cartItemId, Long quantity) {
        if (quantity <= 0) {
            this.deleteById(cartItemId);
        } else {
            CartItem cartItem = this.findOne(cartItemId).orElseThrow(() -> new HttpStatusException("Cart item not found", 404));
            cartItem.setQuantity(quantity);
            this.update(cartItem);
        }
    }

    @Override
    @Transactional
    public void clearAllCartItems(Long cartId) {
        ((CartItemRepository) super.repository).deleteAllByCartId(cartId);
    }
}
