package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.OrderItem;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends AbstractRepository<OrderItem> {
    @EntityGraph(attributePaths = {"variant", "variant.product", "variant.product.file"})
    List<OrderItem> findAllByOrderId(Long orderId);
}
