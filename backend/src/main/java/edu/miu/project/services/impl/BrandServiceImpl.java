package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Brand;
import edu.miu.project.services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandServiceImpl extends AbstractMutableService<Brand> implements BrandService {
    @Autowired
    protected BrandServiceImpl(AbstractRepository<Brand> repository) {
        super(repository);
    }
}
