package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Variant;
import edu.miu.project.services.VariantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VariantServiceImpl extends AbstractMutableService<Variant> implements VariantService {
    @Autowired
    protected VariantServiceImpl(AbstractRepository<Variant> repository) {
        super(repository);
    }
}
