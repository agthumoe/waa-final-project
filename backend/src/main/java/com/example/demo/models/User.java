package com.example.demo.models;

import com.example.demo.commons.models.MutableModel;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = true)
public class User extends MutableModel {
    @Column(unique = true, nullable = false)
    private String email;
    private String name;
    @Column(nullable = false)
    private String password;
}
