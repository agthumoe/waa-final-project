package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.dtos.CartDto;
import edu.miu.project.models.dtos.CartItemRequest;
import edu.miu.project.services.CartItemService;
import edu.miu.project.services.CartService;
import edu.miu.project.services.impl.CartServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Tag(name = "Cart", description = "Cart endpoints for the application")
@RequestMapping("/api/v1/carts")
public class CartController {
    private final CartItemService cartItemService;
    private final CartService cartService;
    private final CustomMapper mapper;

    @GetMapping
    public CartDto getCurrentCart() {
        return this.mapper.map(this.cartService.getCart(), CartDto.class);
    }

    @PostMapping("/items")
    @ResponseStatus(HttpStatus.CREATED)
    public void addItemToCart(@RequestBody @Valid CartItemRequest request) {
        cartItemService.addItemsToCart(request.getCartId(), request.getVariantId(), request.getQuantity());
    }

    @DeleteMapping
    public void clearCart() {
        cartItemService.clearAllCartItems(this.cartService.getCart().getId());
    }

    @PutMapping("/items/{cartItemId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCartItem(@PathVariable Long cartItemId, @RequestBody @Valid CartItemRequest request) {
        cartItemService.updateCartItem(cartItemId, request.getQuantity());
    }

    @DeleteMapping("/items/{cartItemId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCartItem(@PathVariable Long cartItemId) {
        cartItemService.deleteById(cartItemId);
    }
}
