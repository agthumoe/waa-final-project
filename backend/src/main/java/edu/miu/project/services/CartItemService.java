package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.CartItem;

public interface CartItemService extends MutableService<CartItem> {
    void addItemsToCart(Long cartId, Long variantId, Long quantity);
    void updateCartItem(Long cartItemId, Long quantity);
    void clearAllCartItems(Long cartId);
}
