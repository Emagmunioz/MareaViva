package com.mareaviva.service;

import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldRegisterUserSuccessfully() {
        UserRegistrationDTO userDto = new UserRegistrationDTO();
        userDto.setFirstName("John");
        userDto.setLastName("Doe");
        userDto.setCity("City");
        userDto.setProvince("Province");
        userDto.setDni("12345678");
        userDto.setPhone("123456789");
        userDto.setEmail("john@example.com");
        userDto.setPassword("password123");
        userDto.setRole("USER");

        userService.registerUser(userDto);

        verify(userRepository).save(org.mockito.ArgumentMatchers.any(User.class));
    }

    @Test
    void shouldFindUserByEmail() {
        User user = new User();
        user.setEmail("john@example.com");

        when(userRepository.findByEmail("john@example.com")).thenReturn(user);

        User found = userService.findByEmail("john@example.com");

        assertEquals("john@example.com", found.getEmail());
    }

    @Test
    void shouldCheckPasswordSuccessfully() {
        String rawPassword = "password123";
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(rawPassword);

        boolean matches = userService.checkPassword(rawPassword, encodedPassword);

        assertTrue(matches);
    }
}
