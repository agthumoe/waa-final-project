package edu.miu.project.services.impl;

import edu.miu.project.commons.services.AbstractMutableService;
import edu.miu.project.models.Product;
import edu.miu.project.services.ProductService;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl extends AbstractMutableService<Product> implements ProductService {
}
