package com.mareaviva.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mareaviva.dto.LoginRequest;
import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.service.UserService;
import com.mareaviva.util.JwtUtil;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AuthController.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @MockBean
    private JwtUtil jwtUtil;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldRegisterUserSuccessfully() throws Exception {
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setEmail("test@example.com");
        dto.setFirstName("Test");

        when(userService.findByEmail(dto.getEmail())).thenReturn(null);

        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("Usuario registrado exitosamente")));
    }

    @Test
    void shouldFailRegisterWhenEmailExists() throws Exception {
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setEmail("existing@example.com");

        when(userService.findByEmail(dto.getEmail())).thenReturn(new User());

        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isConflict());
    }

    @Test
    void shouldLoginSuccessfully() throws Exception {
        LoginRequest loginRequest = new LoginRequest("user@example.com", "password");
        User user = new User();
        user.setEmail("user@example.com");
        user.setPassword("encodedpassword");

        when(userService.findByEmail(loginRequest.getEmail())).thenReturn(user);
        when(userService.checkPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(true);
        when(jwtUtil.generateToken(user.getEmail())).thenReturn("fake-jwt-token");

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("token")));
    }

    @Test
    void shouldFailLoginWhenUserNotFound() throws Exception {
        LoginRequest loginRequest = new LoginRequest("noone@example.com", "password");

        when(userService.findByEmail(loginRequest.getEmail())).thenReturn(null);

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void shouldFailLoginWhenPasswordMismatch() throws Exception {
        LoginRequest loginRequest = new LoginRequest("user@example.com", "wrongpassword");
        User user = new User();
        user.setEmail("user@example.com");
        user.setPassword("encodedpassword");

        when(userService.findByEmail(loginRequest.getEmail())).thenReturn(user);
        when(userService.checkPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(false);

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isUnauthorized());
    }
}
