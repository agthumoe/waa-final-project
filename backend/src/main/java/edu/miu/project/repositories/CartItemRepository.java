package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.CartItem;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends AbstractRepository<CartItem> {
    void deleteAllByCartId(Long cartId);
}
