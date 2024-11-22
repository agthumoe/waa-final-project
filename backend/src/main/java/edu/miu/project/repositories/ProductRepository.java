package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Product;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends AbstractRepository<Product> {
//    @Query("select new edu.miu.project.models.dtos.ProductDto(p, s.name, s.id, c.name, c.id, b.name, b.id, sum(v.stock)) from Product p join p.subCategory s join s.category c join p.brand b left join p.variants v group by p.id, s.id, c.id, b.id")
//    Page<ProductDto> getAllBy(Pageable pageable);

    @EntityGraph(attributePaths = {"subCategory", "subCategory.category", "brand", "variants", "seller", "file"})
    Optional<Product> findById(Long id);

    @Query("select case when count(o) > 0 then true else false end from OrderItem o where o.variant.product.id = :id")
    boolean hasAnyOrder(Long id);
}
