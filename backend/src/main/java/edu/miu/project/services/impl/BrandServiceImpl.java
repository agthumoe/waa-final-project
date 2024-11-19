package edu.miu.project.services.impl;

import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Brand;
import edu.miu.project.services.BrandService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class BrandServiceImpl extends AbstractMutableService<Brand> implements BrandService {
}
