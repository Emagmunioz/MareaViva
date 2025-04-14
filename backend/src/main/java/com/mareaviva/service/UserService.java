package com.mareaviva.service;

import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerUser(UserRegistrationDTO userDto) {
        User user = new User(
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getCity(),
                userDto.getProvince(),
                userDto.getDni(),
                userDto.getPhone(),
                userDto.getEmail(),
                userDto.getPassword()
        );

        userRepository.save(user);
    }
}
