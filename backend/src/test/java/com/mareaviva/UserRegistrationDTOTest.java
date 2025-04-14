
package com.mareaviva;

import com.mareaviva.dto.UserRegistrationDTO;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
@ActiveProfiles("test")
public class UserRegistrationDTOTest {

    @Test
    public void shouldSetAndGetFieldsCorrectly() {
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setFirstName("Carlos");
        dto.setLastName("López");
        dto.setCity("Barcelona");
        dto.setProvince("Barcelona");
        dto.setDni("98765432L");
        dto.setPhone("611223344");
        dto.setEmail("carlos@example.com");
        dto.setPassword("securePass123");

        assertThat(dto.getFirstName()).isEqualTo("Carlos");
        assertThat(dto.getLastName()).isEqualTo("López");
        assertThat(dto.getEmail()).isEqualTo("carlos@example.com");
        assertThat(dto.getDni()).isEqualTo("98765432L");
    }
}
