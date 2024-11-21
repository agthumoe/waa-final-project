package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Cart;

public interface CartService extends MutableService<Cart> {
    Cart getCart();
}
