package com.mareaviva.service;

import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

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
                passwordEncoder.encode(userDto.getPassword()), 
                userDto.getRole()
        );

        userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean checkPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
