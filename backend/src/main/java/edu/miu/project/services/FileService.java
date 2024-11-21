package edu.miu.project.services;

import edu.miu.project.commons.services.ImmutableService;
import edu.miu.project.models.File;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService extends ImmutableService<File> {
    File create(MultipartFile file);
}
