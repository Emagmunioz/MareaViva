package com.mareaviva.controller;

import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDTO userDto) {
        // Validar si el email ya existe
        if (userRepository.findByEmail(userDto.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya está registrado.");
        }

        // Crear un nuevo User
        User newUser = new User(
            userDto.getFirstName(),
            userDto.getLastName(),
            userDto.getCity(),
            userDto.getProvince(),
            userDto.getDni(),
            userDto.getPhone(),
            userDto.getEmail(),
            userDto.getPassword(),
            userDto.getRole() // 🚀 Rol nuevo
        );

        // Guardarlo en la base de datos
        userRepository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario registrado exitosamente: " + newUser.getFirstName());
    }
}
