package com.example.Backend.Controller;

import com.example.Backend.Model.LoginModel;
import com.example.Backend.Model.UserModel;
import com.example.Backend.Model.UserModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/req")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private UserModelRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginModel loginRequest) {
        try {
            UserModel user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return ResponseEntity.badRequest().body("Wrong password");
            }

            // ✅ No JWT - just success message
            return ResponseEntity.ok("Login successful");

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
