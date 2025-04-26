package com.mareaviva.service;

import com.mareaviva.model.Collaborator;
import com.mareaviva.repository.CollaboratorRepository;
import org.springframework.stereotype.Service;

@Service
public class CollaboratorService {

    private final CollaboratorRepository repository;

    public CollaboratorService(CollaboratorRepository repository) {
        this.repository = repository;
    }

    public Collaborator save(Collaborator collaborator) {
        return repository.save(collaborator);
    }
}
