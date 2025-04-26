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
        message.setSubject("¡Nuevo contacto desde Marea Viva!");
        message.setText("Hola, un usuario llamado " + userName + " quiere contactar contigo.\n\nConéctate al chat en: https://mareaviva.com/chat");

        mailSender.send(message);
    }
}
