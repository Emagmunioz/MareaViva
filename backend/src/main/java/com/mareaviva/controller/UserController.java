package com.mareaviva.controller;
import com.mareaviva.service.UserService;
import com.mareaviva.dto.UserRegistrationDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    // Constructor con inyección de dependencias
    public UserController(UserService userService) {
        this.userService = userService;
    }




    @PostMapping
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDTO userDto){ userService.registerUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }
        // Aquí luego se llamará a UserService para guardar en la base de datos
       
    }



