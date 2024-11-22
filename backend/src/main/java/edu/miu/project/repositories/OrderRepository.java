package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends AbstractRepository<Order> {
    Page<Order> findAllByBuyerId(Long buyerId, Pageable pageable);
}
