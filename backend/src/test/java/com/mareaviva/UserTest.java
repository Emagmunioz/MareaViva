
package com.mareaviva;

import com.mareaviva.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
@ActiveProfiles("test")
public class UserTest {

    @Test
    public void shouldCreateUserWithAllFields() {
        User user = new User("Laura", "García", "Valencia", "Valencia",
                "12345678Z", "612345678", "laura@example.com", "securePassword123");

        assertThat(user.getFirstName()).isEqualTo("Laura");
        assertThat(user.getEmail()).isEqualTo("laura@example.com");
    }
}
