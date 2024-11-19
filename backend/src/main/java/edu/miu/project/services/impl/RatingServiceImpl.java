package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Rating;
import edu.miu.project.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingServiceImpl extends AbstractMutableService<Rating> implements RatingService {
    @Autowired
    protected RatingServiceImpl(AbstractRepository<Rating> repository) {
        super(repository);
    }
}
