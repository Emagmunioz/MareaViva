package com.mareaviva.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactNotification(String toEmail, String userName) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("🌊 Nuevo contacto en Marea Viva: " + userName + " quiere hablar contigo");
        message.setText(
            "Hola,\n\n" +
            "Un usuario llamado " + userName + " quiere hablar contigo para recibir apoyo emocional.\n\n" +
            "Por favor, conéctate cuanto antes al chat de Marea Viva para iniciar la conversación.\n\n" +
            "Gracias por formar parte de nuestra red de apoyo. 💙\n\n" +
            "Equipo de Marea Viva"
        );

        mailSender.send(message);
    }
}
