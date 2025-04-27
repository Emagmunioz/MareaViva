package com.mareaviva.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserTest {

    @Test
    void shouldSetAndGetAllFields() {
        User user = new User();

        user.setFirstName("John");
        user.setLastName("Doe");
        user.setCity("City");
        user.setProvince("Province");
        user.setDni("12345678");
        user.setPhone("123456789");
        user.setEmail("john@example.com");
        user.setPassword("password123");
        user.setRole("USER");

        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("City", user.getCity());
        assertEquals("Province", user.getProvince());
        assertEquals("12345678", user.getDni());
        assertEquals("123456789", user.getPhone());
        assertEquals("john@example.com", user.getEmail());
        assertEquals("password123", user.getPassword());
        assertEquals("USER", user.getRole());
    }

    @Test
    void shouldCreateUserWithConstructor() {
        User user = new User("John", "Doe", "City", "Province", "12345678", "123456789", "john@example.com", "password123", "USER");

        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("City", user.getCity());
        assertEquals("Province", user.getProvince());
        assertEquals("12345678", user.getDni());
        assertEquals("123456789", user.getPhone());
        assertEquals("john@example.com", user.getEmail());
        assertEquals("password123", user.getPassword());
        assertEquals("USER", user.getRole());
    }
}
