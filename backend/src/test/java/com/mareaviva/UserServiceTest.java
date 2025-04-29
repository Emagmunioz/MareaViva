package com.mareaviva;


import com.mareaviva.dto.UserRegistrationDTO;
import com.mareaviva.model.User;
import com.mareaviva.repository.UserRepository;
import com.mareaviva.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.test.context.ActiveProfiles;

import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.assertThat;
@ActiveProfiles("test")
public class UserServiceTest {

    @Test
    public void shouldSaveUserToRepository() {
       
        UserRepository mockRepo = mock(UserRepository.class);
        UserService userService = new UserService(mockRepo);

        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setFirstName("Ana");
        dto.setLastName("Martínez");
        dto.setCity("Sevilla");
        dto.setProvince("Sevilla");
        dto.setDni("87654321X");
        dto.setPhone("622334455");
        dto.setEmail("ana@example.com");
        dto.setPassword("secure123");

        
        userService.registerUser(dto);

       
        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(mockRepo, times(1)).save(userCaptor.capture());

        User savedUser = userCaptor.getValue();
        assertThat(savedUser.getEmail()).isEqualTo("ana@example.com");
        assertThat(savedUser.getDni()).isEqualTo("87654321X");
    }
}
