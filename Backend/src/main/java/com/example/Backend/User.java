package com.example.Backend;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
//@Table(name = "user_model")
public class User { // Top-level class (not nested)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
}