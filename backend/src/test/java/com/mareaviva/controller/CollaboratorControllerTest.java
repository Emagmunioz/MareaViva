package com.mareaviva.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.mareaviva.model.Collaborator;
import com.mareaviva.repository.CollaboratorRepository;
import com.mareaviva.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CollaboratorController.class)
@AutoConfigureMockMvc(addFilters = false)
class CollaboratorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CollaboratorRepository collaboratorRepository;

    @MockBean
    private EmailService emailService;

    private final ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());

    @Test
    void shouldSubmitProposalSuccessfully() throws Exception {
        Collaborator collaborator = new Collaborator();
        collaborator.setName("Test Collaborator");
        collaborator.setCreatedAt(LocalDateTime.now());

        when(collaboratorRepository.save(any())).thenReturn(collaborator);

        mockMvc.perform(post("/api/collaborators")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(collaborator)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test Collaborator"));
    }

    @Test
    void shouldGetAllCollaborators() throws Exception {
        when(collaboratorRepository.findAll()).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/api/collaborators"))
                .andExpect(status().isOk());
    }

    @Test
    void shouldContactCollaboratorSuccessfully() throws Exception {
        Collaborator collaborator = new Collaborator();
        collaborator.setName("John Doe");
        collaborator.setDescription("Support Description");

        when(collaboratorRepository.findById(anyLong())).thenReturn(Optional.of(collaborator));

        mockMvc.perform(post("/api/collaborators/contact")
                        .param("collaboratorId", "1")
                        .param("userName", "UserName"))
                .andExpect(status().isOk())
                .andExpect(content().string("Se ha enviado un email al administrador."));
    }

    @Test
    void shouldReturnErrorWhenCollaboratorNotFound() throws Exception {
        when(collaboratorRepository.findById(anyLong())).thenReturn(Optional.empty());

        mockMvc.perform(post("/api/collaborators/contact")
                        .param("collaboratorId", "99")
                        .param("userName", "UserName"))
                .andExpect(status().isOk())
                .andExpect(content().string("Colaborador no encontrado."));
    }
}
