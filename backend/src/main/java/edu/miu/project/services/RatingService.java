package edu.miu.project.services;

import edu.miu.project.commons.services.MutableService;
import edu.miu.project.models.Rating;

import java.util.List;

public interface RatingService extends MutableService<Rating> {
    List<Rating> getRatingsByProductId(Long productId);
    Rating create(Long productId, Rating rating);
}
