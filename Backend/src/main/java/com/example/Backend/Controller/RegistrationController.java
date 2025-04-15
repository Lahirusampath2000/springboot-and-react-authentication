package com.example.Backend.Controller;

import com.example.Backend.Model.UserModel;
import com.example.Backend.Model.UserModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private UserModelRepository userModelRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value = "/req/signup", consumes = "application/json")
    public ResponseEntity<?> registerUser(@RequestBody UserModel userModel) {
        // Validate email 
        if (userModel.getEmail() == null || userModel.getEmail().isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Collections.singletonMap("message", "Email is required"));
        }

        // Check for existing email
        if (userModelRepository.existsByEmail(userModel.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("message", "Email already exists"));
        }


        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
        UserModel savedUser = userModelRepository.save(userModel);
        return ResponseEntity.ok(savedUser);
    }
}