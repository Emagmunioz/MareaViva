package com.mareaviva.controller;

import com.mareaviva.model.Profile;
import com.mareaviva.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173") // Permitir peticiones del frontend
public class ProfileController {

    private static final String UPLOAD_DIR = "uploads";

    @Autowired
    private ProfileRepository profileRepository;

    // 🔥 POST: Crear perfil
    @PostMapping
    public Profile createProfile(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("role") String role,
            @RequestParam("description") String description,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws IOException {
        Profile profile = new Profile();
        profile.setFirstName(firstName);
        profile.setLastName(lastName);
        profile.setRole(role);
        profile.setDescription(description);
        profile.setCreatedAt(LocalDateTime.now());

        if (image != null && !image.isEmpty()) {
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            String originalFilename = StringUtils.cleanPath(image.getOriginalFilename());
            String extension = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
            if (!extension.matches("\\.(jpg|jpeg|png|gif)$")) {
                throw new IllegalArgumentException("Solo se permiten imágenes JPG, JPEG, PNG o GIF.");
            }

            String uniqueFilename = UUID.randomUUID().toString() + extension;
            Path filePath = Paths.get(UPLOAD_DIR, uniqueFilename);
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            profile.setImageUrl("/uploads/" + uniqueFilename);
        } else {
            profile.setImageUrl("/default-profile.png");
        }

        return profileRepository.save(profile);
    }

    // 🔥 GET: Listar todos los perfiles
    @GetMapping("/all")
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    // 🔥 PUT: Modificar un perfil
    @PutMapping("/{id}")
    public Profile updateProfile(@PathVariable Long id, @RequestBody Profile updatedProfile) {
        return profileRepository.findById(id)
                .map(profile -> {
                    profile.setFirstName(updatedProfile.getFirstName());
                    profile.setLastName(updatedProfile.getLastName());
                    profile.setRole(updatedProfile.getRole());
                    profile.setDescription(updatedProfile.getDescription());
                    profile.setImageUrl(updatedProfile.getImageUrl());
                    return profileRepository.save(profile);
                })
                .orElseThrow(() -> new RuntimeException("Perfil no encontrado con ID: " + id));
    }

    // 🔥 DELETE: Eliminar un perfil
    @DeleteMapping("/{id}")
    public String deleteProfile(@PathVariable Long id) {
        if (!profileRepository.existsById(id)) {
            throw new RuntimeException("Perfil no encontrado con ID: " + id);
        }
        profileRepository.deleteById(id);
        return "Perfil eliminado correctamente.";
    }
}
