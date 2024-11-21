package edu.miu.project.controllers;

import edu.miu.project.models.File;
import edu.miu.project.services.FileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/files")
@RequiredArgsConstructor
@Tag(name = "Files", description = "File endpoints for the application")
public class FileController {
    private final FileService fileService;

    @PostMapping(consumes = "multipart/form-data")
    public File singleFileUpload(@RequestBody MultipartFile file) {
        return this.fileService.create(file);
    }
}
