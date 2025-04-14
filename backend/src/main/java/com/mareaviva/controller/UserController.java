package com.mareaviva.controller;

import com.mareaviva.dto.UserRegistrationDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDTO userDto) {
        // Aquí luego se llamará a UserService para guardar en la base de datos
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }
}


