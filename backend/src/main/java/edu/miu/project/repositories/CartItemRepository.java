package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.CartItem;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends AbstractRepository<CartItem> {
    void deleteAllByCartId(Long cartId);

    @EntityGraph(attributePaths = {"variant", "variant.product"})
    List<CartItem> findAllByCartId(Long cartId);

    Optional<CartItem> findByCartIdAndVariantId(Long cartId, Long variantId);
}
