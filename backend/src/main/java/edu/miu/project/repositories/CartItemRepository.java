package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.CartItem;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends AbstractRepository<CartItem> {
    @Query("delete from CartItem c where c.cart.id = ?1")
    @Modifying
    void deleteAllByCartId(Long cartId);

    @EntityGraph(attributePaths = {"variant", "variant.product"})
    List<CartItem> findAllByCartId(Long cartId);

    Optional<CartItem> findByCartIdAndVariantId(Long cartId, Long variantId);

    @Query("delete from CartItem c where c.id = ?1")
    @Modifying
    void deleteById(Long cartItemId);
}
