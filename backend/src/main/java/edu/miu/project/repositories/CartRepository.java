package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Cart;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends AbstractRepository<Cart> {
    @EntityGraph(attributePaths = {"items", "buyer", "items.variant", "items.variant.product", "items.variant.product.file"})
    Optional<Cart> findByBuyerId(Long buyerId);
}
