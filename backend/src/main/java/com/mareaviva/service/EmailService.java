package com.mareaviva.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    private static final String FROM_EMAIL = "tu-email@gmail.com"; // 🔥 (opcional, si quieres fijarlo siempre)

    public void sendContactNotification(String toEmail, String volunteerName, String userName) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(FROM_EMAIL); // 🔥 Opcional, Gmail lo fuerza normalmente pero otros SMTP pueden respetarlo
        message.setTo(toEmail);
        message.setSubject("🌊 Nuevo contacto en Marea Viva: " + userName + " quiere hablar contigo");
        message.setText(
            "Hola " + volunteerName + ",\n\n" +  // 🔥 Personalizamos también el nombre del voluntario
            "Un usuario llamado " + userName + " quiere hablar contigo para recibir apoyo emocional.\n\n" +
            "Por favor, conéctate cuanto antes al chat de Marea Viva para iniciar la conversación.\n\n" +
            "Gracias por formar parte de nuestra red de apoyo 💙.\n\n" +
            "— Equipo de Marea Viva"
        );

        mailSender.send(message);
    }

    public void sendCollaborationRequest(String toAdminEmail, String collaboratorName, String collaboratorMessage) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("tu-email@gmail.com");
        message.setTo(toAdminEmail);
        message.setSubject("🤝 Nueva solicitud de colaboración - " + collaboratorName);
        message.setText(
            "Hola equipo de Marea Viva,\n\n" +
            "Un nuevo profesional ha enviado una solicitud para colaborar:\n\n" +
            "Nombre: " + collaboratorName + "\n" +
            "Mensaje: " + collaboratorMessage + "\n\n" +
            "Por favor, revisen la solicitud y contacten al profesional si es adecuado.\n\n" +
            "💙 Marea Viva"
        );
        mailSender.send(message);
    }
       
}
