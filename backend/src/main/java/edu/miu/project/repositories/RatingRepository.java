package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.Rating;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends AbstractRepository<Rating> {
}
