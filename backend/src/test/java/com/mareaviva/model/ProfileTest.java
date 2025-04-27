package com.mareaviva.model;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ProfileTest {

    @Test
    void shouldSetAndGetAllFields() {
        Profile profile = new Profile();

        profile.setId(1L);
        profile.setFirstName("John");
        profile.setLastName("Doe");
        profile.setRole("VOLUNTEER");
        profile.setDescription("Helping people");
        profile.setImageUrl("/images/john.png");
        LocalDateTime now = LocalDateTime.now();
        profile.setCreatedAt(now);

        assertEquals(1L, profile.getId());
        assertEquals("John", profile.getFirstName());
        assertEquals("Doe", profile.getLastName());
        assertEquals("VOLUNTEER", profile.getRole());
        assertEquals("Helping people", profile.getDescription());
        assertEquals("/images/john.png", profile.getImageUrl());
        assertEquals(now, profile.getCreatedAt());
    }
}
