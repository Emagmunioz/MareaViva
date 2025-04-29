package com.mareaviva.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.Mockito.verify;

class EmailServiceTest {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldSendContactNotification() {
        String toEmail = "volunteer@example.com";
        String volunteerName = "Volunteer";
        String userName = "User";

        emailService.sendContactNotification(toEmail, volunteerName, userName);

        verify(mailSender).send(org.mockito.ArgumentMatchers.any(SimpleMailMessage.class));
    }

    @Test
    void shouldSendCollaborationRequest() {
        String toAdminEmail = "admin@example.com";
        String collaboratorName = "Collaborator";
        String collaboratorMessage = "I want to help.";

        emailService.sendCollaborationRequest(toAdminEmail, collaboratorName, collaboratorMessage);

        verify(mailSender).send(org.mockito.ArgumentMatchers.any(SimpleMailMessage.class));
    }
}
