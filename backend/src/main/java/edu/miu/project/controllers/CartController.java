package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.CartItem;
import edu.miu.project.models.dtos.CartDto;
import edu.miu.project.models.dtos.CartItemDto;
import edu.miu.project.models.dtos.CartItemRequest;
import edu.miu.project.services.CartItemService;
import edu.miu.project.services.CartService;
import edu.miu.project.services.impl.CartServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "Cart", description = "Cart endpoints for the application")
@RequestMapping("/api/v1/carts")
@SecurityRequirement(name = "bearerAuth")
public class CartController {
    private final CartItemService cartItemService;
    private final CartService cartService;
    private final CustomMapper mapper;

    @GetMapping
    @PreAuthorize("hasRole('BUYER')")
    public CartDto getCurrentCart() {
        return this.mapper.map(this.cartService.getCart(), CartDto.class);
    }

    @PostMapping("/items")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('BUYER')")
    public void addItemToCart(@RequestBody @Valid CartItemRequest request) {
        cartItemService.addItemsToCart(request.getCartId(), request.getVariantId(), request.getQuantity());
    }

    @GetMapping("/items")
    @PreAuthorize("hasRole('BUYER')")
    public List<CartItemDto> getCartItems() {
        return this.mapper.map(this.cartService.getCartItems(), CartItemDto.class);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('BUYER')")
    public void clearCart() {
        cartItemService.clearAllCartItems(this.cartService.getCart().getId());
    }

    @PutMapping("/items/{cartItemId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasRole('BUYER')")
    public void updateCartItem(@PathVariable Long cartItemId, @RequestBody @Valid CartItemRequest request) {
        cartItemService.updateCartItem(cartItemId, request.getQuantity());
    }

    @DeleteMapping("/items/{cartItemId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasRole('BUYER')")
    public void deleteCartItem(@PathVariable Long cartItemId) {
        cartItemService.deleteById(cartItemId);
    }
}
