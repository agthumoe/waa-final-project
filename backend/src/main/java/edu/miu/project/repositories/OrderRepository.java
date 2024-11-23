package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Order;
import edu.miu.project.models.enums.OrderStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends AbstractRepository<Order> {
    Page<Order> findAllByBuyerId(Long buyerId, Pageable pageable);
    Page<Order> findAllBySellerId(Long sellerId, Pageable pageable);
    long countBySellerId(Long sellerId);
    @Query("update Order o set o.status = :status where o.id = :orderId")
    @Modifying
    void updateOrderStatus(Long orderId, OrderStatus status);
}
