package com.mareaviva.dto;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class LoginRequestTest {

    @Test
    void shouldSetAndGetFields() {
        LoginRequest loginRequest = new LoginRequest("user@example.com", "password123");

        assertEquals("user@example.com", loginRequest.getEmail());
        assertEquals("password123", loginRequest.getPassword());
    }

    @Test
    void shouldCreateLoginRequestWithConstructor() {
        LoginRequest loginRequest = new LoginRequest("user@example.com", "password123");

        assertEquals("user@example.com", loginRequest.getEmail());
        assertEquals("password123", loginRequest.getPassword());
    }
}
