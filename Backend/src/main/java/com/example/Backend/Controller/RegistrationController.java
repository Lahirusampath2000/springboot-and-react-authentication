package com.example.Backend.Controller;

import com.example.Backend.Model.UserModel;
import com.example.Backend.Model.UserModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private UserModelRepository userModelRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value="/req/signup",consumes = "application/json")
    public UserModel registerUser(@RequestBody UserModel userModel){

        if(userModel.getEmail()==null || userModel.getEmail().isEmpty()){
            throw new IllegalArgumentException("Email is required");
        }
        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));

        return userModelRepository.save(userModel);
    }




}
