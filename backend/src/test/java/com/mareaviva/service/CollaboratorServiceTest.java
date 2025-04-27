package com.mareaviva.service;

import com.mareaviva.model.Collaborator;
import com.mareaviva.repository.CollaboratorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CollaboratorServiceTest {

    @Mock
    private CollaboratorRepository collaboratorRepository;

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private CollaboratorService collaboratorService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldSaveCollaboratorAndSendEmail() {
        Collaborator collaborator = new Collaborator();
        collaborator.setName("John Doe");
        collaborator.setEmail("john@example.com");
        collaborator.setDescription("I want to collaborate.");

        when(collaboratorRepository.save(any(Collaborator.class))).thenReturn(collaborator);

        Collaborator savedCollaborator = collaboratorService.save(collaborator);

        assertEquals("John Doe", savedCollaborator.getName());
        verify(collaboratorRepository).save(any(Collaborator.class));
        verify(mailSender).send(any(SimpleMailMessage.class));
    }
}
