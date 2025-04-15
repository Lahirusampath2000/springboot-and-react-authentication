package com.example.Backend.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String role;
}
