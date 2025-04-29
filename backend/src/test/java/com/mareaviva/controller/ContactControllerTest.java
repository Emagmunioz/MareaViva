package com.mareaviva.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mareaviva.model.Profile;
import com.mareaviva.repository.ProfileRepository;
import com.mareaviva.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ContactController.class)
@AutoConfigureMockMvc(addFilters = false)
class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProfileRepository profileRepository;

    @MockBean
    private EmailService emailService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldSendEmailWhenVolunteerExists() throws Exception {
        Profile profile = new Profile();
        profile.setFirstName("Volunteer");

        when(profileRepository.findById(1L)).thenReturn(Optional.of(profile));

        ContactController.ContactRequest request = new ContactController.ContactRequest();
        request.setVolunteerId(1L);

        mockMvc.perform(post("/api/contact-volunteer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(content().string("Email enviado al voluntario exitosamente"));
    }

    @Test
    void shouldReturnErrorWhenVolunteerNotFound() throws Exception {
        when(profileRepository.findById(anyLong())).thenReturn(Optional.empty());

        ContactController.ContactRequest request = new ContactController.ContactRequest();
        request.setVolunteerId(999L);

        mockMvc.perform(post("/api/contact-volunteer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().is4xxClientError()); 
    }
}
