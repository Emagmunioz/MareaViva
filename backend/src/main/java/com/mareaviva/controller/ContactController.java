package com.mareaviva.controller;

import com.mareaviva.model.Profile;
import com.mareaviva.repository.ProfileRepository;
import com.mareaviva.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Permitir peticiones del frontend
public class ContactController {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact-volunteer")
    public String contactVolunteer(@RequestBody ContactRequest request) {
        Long volunteerId = request.getVolunteerId();

        // 🔥 Buscar el voluntario en la base de datos
        Optional<Profile> optionalProfile = profileRepository.findById(volunteerId);

        if (optionalProfile.isPresent()) {
            Profile volunteer = optionalProfile.get();
          
            // 🚨 OJO: Aquí deberías tener un campo 'email' en Profile. Por ahora está en 'description' como parche.
            String volunteerEmail = "prueba@mareaviva.org";
            // 🔥 Componer y enviar el email
            String subject = "Marea Viva - ¡Un usuario quiere contactar contigo!";
            String message = "Hola " + volunteer.getFirstName() + ",\n\n" +
                    "Un usuario quiere iniciar un chat contigo a través de la plataforma Marea Viva.\n" +
                    "Por favor, conéctate al sistema para aceptar la conversación.\n\n" +
                    "Gracias por tu colaboración 💙.";

             emailService.sendContactNotification(volunteerEmail, volunteer.getFirstName(), userName);


            return "Email enviado al voluntario exitosamente";
        } else {
            throw new RuntimeException("Voluntario no encontrado con ID: " + volunteerId);
        }
    }

    // Clase auxiliar para mapear el JSON de la solicitud
    public static class ContactRequest {
        private Long volunteerId;

        public Long getVolunteerId() {
            return volunteerId;
        }

        public void setVolunteerId(Long volunteerId) {
            this.volunteerId = volunteerId;
        }
    }
}
