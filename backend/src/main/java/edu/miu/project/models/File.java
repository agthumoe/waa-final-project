package edu.miu.project.models;

import edu.miu.project.commons.models.ImmutableModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "files")
@Data
@EqualsAndHashCode(callSuper = true)
public class File extends ImmutableModel {
    @Column(name = "url", nullable = false)
    private String url;
    @Column(name = "content_type", nullable = false)
    private String contentType;
}
