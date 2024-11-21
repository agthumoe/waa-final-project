package edu.miu.project.services.impl;

import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.commons.repositories.AbstractRepository;
import edu.miu.project.commons.services.AbstractImmutableService;
import edu.miu.project.models.File;
import edu.miu.project.services.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.*;

@Service
public class FileServiceImpl extends AbstractImmutableService<File> implements FileService {
    private final S3Client s3Client;

    @Value("${aws.s3.bucket}")
    private String bucket;

    @Autowired
    protected FileServiceImpl(AbstractRepository<File> repository, S3Client s3Client) {
        super(repository);
        this.s3Client = s3Client;
    }

    @Override
    public File create(MultipartFile multipartFile) {
        if (multipartFile == null || multipartFile.isEmpty()) {
            throw new HttpStatusException("File is required", 400);
        }
        try {
            byte[] bytes = multipartFile.getBytes();  //Multipart file uploaded on server
            InputStream inputStream = new ByteArrayInputStream(bytes);
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucket)
                    .key(multipartFile.getOriginalFilename())
                    .build();
            s3Client.putObject(putObjectRequest, RequestBody.fromInputStream(inputStream, bytes.length));
        } catch (IOException e) {
            throw new HttpStatusException("Failed to upload file", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        File file = new File();
        file.setUrl("https://" + bucket + ".s3.amazonaws.com/" + multipartFile.getOriginalFilename());
        file.setContentType(multipartFile.getContentType());
        return super.create(file);
    }
}
