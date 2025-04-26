package com.mareaviva.controller;

import com.mareaviva.model.Collaborator;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.mareaviva.repository.CollaboratorRepository;
import java.time.LocalDateTime;
@RestController
@RequestMapping("/api/collaborators")
public class CollaboratorController {

    @Autowired
    private CollaboratorRepository collaboratorRepository;

    @PostMapping
    public Collaborator submitProposal(@RequestBody Collaborator collaborator) {
        collaborator.setCreatedAt(LocalDateTime.now());
        return collaboratorRepository.save(collaborator);
    }
}