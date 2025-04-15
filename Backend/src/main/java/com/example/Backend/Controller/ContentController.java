package com.example.Backend.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Change to regular controller
@RestController
public class ContentController {

    // Your controller endpoints here
    @GetMapping("/some-endpoint")
    public String getContent() {
        return "Hello World";
    }
}