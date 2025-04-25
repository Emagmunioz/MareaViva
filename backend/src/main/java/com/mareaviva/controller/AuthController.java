package com.mareaviva.controller;
import com.mareaviva.dto.UserRegistrationDTO;
import jakarta.validation.Valid;
import com.mareaviva.dto.LoginDTO;
import com.mareaviva.model.User;
import com.mareaviva.service.UserService;

import com.mareaviva.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    //@Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

   // @Autowired
    //private PasswordEncoder passwordEncoder;

   // @PostMapping("/login")
   // public ResponseEntity<?> login(@RequestBody LoginDTO dto) {
      //  User user = userService.findByEmail(dto.getEmail());

       // if (user == null || !passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
         //   return ResponseEntity.status(401).body("Credenciales incorrectas");
        //}

        //String token = jwtUtil.generateToken(user.getEmail());

       // return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
   // }
   // @PostMapping("/register")
    //public ResponseEntity<?> register(@RequestBody @Valid UserRegistrationDTO dto) {
   // try {
     //   userService.registerUser(dto);
      //  return ResponseEntity.ok().body("{\"message\":\"Usuario registrado con éxito\"}");
   // } catch (Exception e) {
     //   return ResponseEntity.status(400).body("{\"error\":\"" + e.getMessage() + "\"}");
   // }
//}


}
