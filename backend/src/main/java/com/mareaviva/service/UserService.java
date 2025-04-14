package com.mareaviva.service;
import com.mareaviva.dto.UserRegistrationDTO;
import org.springframework.stereotype.Service;

@Service

public class UserService {
    public void registerUser(UserRegistrationDTO userDto) {
        // Aquí se implementará la lógica de guardado en base de datos
        System.out.println("User registered: " + userDto.getEmail());
    }

}
