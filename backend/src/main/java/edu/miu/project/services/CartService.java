package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Cart;
import edu.miu.project.models.CartItem;

import java.util.List;

public interface CartService extends MutableService<Cart> {
    Cart getCart();
    List<CartItem> getCartItems();
}
