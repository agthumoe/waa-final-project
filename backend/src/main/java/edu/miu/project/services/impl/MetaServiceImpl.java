package edu.miu.project.services.impl;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Meta;
import edu.miu.project.services.MetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MetaServiceImpl extends AbstractMutableService<Meta> implements MetaService {
    @Autowired
    protected MetaServiceImpl(AbstractRepository<Meta> repository) {
        super(repository);
    }
}
