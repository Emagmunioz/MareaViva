package com.mareaviva.controller;

import com.mareaviva.dto.LoginRequest;
import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.service.UserService;
import com.mareaviva.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDTO userDto) {
        if (userService.findByEmail(userDto.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya está registrado.");
        }

        userService.registerUser(userDto);

        return ResponseEntity.status(HttpStatus.CREATED).body("Usuario registrado exitosamente: " + userDto.getFirstName());
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            User user = userService.findByEmail(loginRequest.getEmail());

            if (user != null) {
              System.out.println("Usuario encontrado: " + user.getEmail());
              System.out.println("Password almacenado en BD (encriptado): " + user.getPassword());
              System.out.println("Password que envía el cliente (raw): " + loginRequest.getPassword());
          } else {
              System.out.println("Usuario NO encontrado");
          }

            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado.");
            }

            boolean passwordMatches = userService.checkPassword(loginRequest.getPassword(), user.getPassword());
            if (!passwordMatches) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta.");
            }

            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok().body("{\"token\": \"" + token + "\"}");
        } catch (Exception e) {
            e.printStackTrace(); // Para ver el error en la consola
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en el servidor: " + e.getMessage());
        }
    }
}
