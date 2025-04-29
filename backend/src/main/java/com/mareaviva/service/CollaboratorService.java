package com.mareaviva.service;

import com.mareaviva.model.Collaborator;
import com.mareaviva.repository.CollaboratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class CollaboratorService {

    private final CollaboratorRepository repository;
    private final JavaMailSender mailSender;

    @Autowired
    public CollaboratorService(CollaboratorRepository repository, JavaMailSender mailSender) {
        this.repository = repository;
        this.mailSender = mailSender;
    }

    public Collaborator save(Collaborator collaborator) {
       
        Collaborator savedCollaborator = repository.save(collaborator);

        
        sendNotificationToAdmin(savedCollaborator);

        return savedCollaborator;
    }

    private void sendNotificationToAdmin(Collaborator collaborator) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("emagmunioz@gmail.com"); 
        message.setSubject("Nuevo formulario de colaboración recibido en Marea Viva");
        message.setText(
            "Se ha recibido un nuevo formulario de colaboración:\n\n" +
            "Nombre: " + collaborator.getName() + "\n" +
            "Email de contacto: " + collaborator.getEmail() + "\n" +
            "Descripción:\n" + collaborator.getDescription()
        );

        mailSender.send(message);
    }
}
