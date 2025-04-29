package com.mareaviva;

import org.junit.jupiter.api.Disabled;

import com.mareaviva.dto.UserRegistrationDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
@Disabled
@ActiveProfiles("test")

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void shouldRegisterUserSuccessfully() {
        
        UserRegistrationDTO userDto = new UserRegistrationDTO();
        userDto.setFirstName("Carlos");
        userDto.setLastName("López");
        userDto.setCity("Madrid");
        userDto.setProvince("Madrid");
        userDto.setDni("12345678Z");
        userDto.setPhone("612345678");
        userDto.setEmail("carlos@example.com");
        userDto.setPassword("mypassword");

        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<UserRegistrationDTO> request = new HttpEntity<>(userDto, headers);

        ResponseEntity<String> response = restTemplate.postForEntity("/auth/register", request, String.class);


       
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isEqualTo("User registered successfully");
    }
}
