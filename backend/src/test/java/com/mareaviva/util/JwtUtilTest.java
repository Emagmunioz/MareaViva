package com.mareaviva.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class JwtUtilTest {

    private final JwtUtil jwtUtil = new JwtUtil();

    @Test
    void shouldGenerateTokenSuccessfully() {
        String email = "user@example.com";

        String token = jwtUtil.generateToken(email);

        assertNotNull(token);
        assertTrue(token.length() > 0);
    }
}
