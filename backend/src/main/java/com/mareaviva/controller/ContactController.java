package com.mareaviva.controller;

import com.mareaviva.model.Profile;
import com.mareaviva.repository.ProfileRepository;
import com.mareaviva.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact-volunteer")
    public String contactVolunteer(@RequestBody ContactRequest request) {
        Long volunteerId = request.getVolunteerId();

        Optional<Profile> optionalProfile = profileRepository.findById(volunteerId);

        if (optionalProfile.isPresent()) {
            Profile volunteer = optionalProfile.get();

            String volunteerEmail = "prueba@mareaviva.org"; 
            String userName = "Usuario Anónimo"; 

            emailService.sendContactNotification(volunteerEmail, volunteer.getFirstName(), userName);

            return "Email enviado al voluntario exitosamente";
        } else {
            throw new RuntimeException("Voluntario no encontrado con ID: " + volunteerId);
        }
    }

    
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
