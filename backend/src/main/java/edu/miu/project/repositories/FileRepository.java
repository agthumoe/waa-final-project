package edu.miu.project.repositories;

import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.models.File;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends AbstractRepository<File> {
}
