package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.OrderItem;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends AbstractRepository<OrderItem> {
}
