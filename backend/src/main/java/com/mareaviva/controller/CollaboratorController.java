package com.mareaviva.controller;

import com.mareaviva.model.Collaborator;
import com.mareaviva.repository.CollaboratorRepository;
import com.mareaviva.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/collaborators")
public class CollaboratorController {

    @Autowired
    private CollaboratorRepository collaboratorRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public Collaborator submitProposal(@RequestBody Collaborator collaborator) {
        collaborator.setCreatedAt(LocalDateTime.now());
        return collaboratorRepository.save(collaborator);
    }

    @GetMapping
    public List<Collaborator> getAllCollaborators() {
        return collaboratorRepository.findAll();
    }

    @PostMapping("/contact")
    public String contactCollaborator(@RequestParam Long collaboratorId, @RequestParam String userName) {
        Collaborator collaborator = collaboratorRepository.findById(collaboratorId).orElse(null);
        if (collaborator == null) {
            return "Colaborador no encontrado.";
        }
        // Enviar email al voluntario
        emailService.sendContactNotification(collaborator.getEmail(), userName);
        return "Se ha enviado un email al voluntario.";
    }
}
