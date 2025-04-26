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

    @PostMapping
    public Profile createProfile(
            @RequestParam("role") String role,
            @RequestParam("description") String description,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws IOException {

        Profile profile = new Profile();
        profile.setRole(role);
        profile.setDescription(description);
        profile.setCreatedAt(LocalDateTime.now());

        if (image != null && !image.isEmpty()) {
            // Crear carpeta uploads si no existe
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Validar extensión permitida
            String originalFilename = StringUtils.cleanPath(image.getOriginalFilename());
            String extension = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
            if (!extension.matches("\\.(jpg|jpeg|png|gif)$")) {
                throw new IllegalArgumentException("Solo se permiten imágenes JPG, JPEG, PNG o GIF.");
            }

            // Generar nombre único
            String uniqueFilename = UUID.randomUUID().toString() + extension;

            // Guardar el archivo
            Path filePath = Paths.get(UPLOAD_DIR, uniqueFilename);
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            profile.setImageUrl("/uploads/" + uniqueFilename);
        } else {
            // Asignar imagen por defecto si no sube ninguna
            profile.setImageUrl("/default-profile.png");
        }

        return profileRepository.save(profile);
    }

    @GetMapping("/all")
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }
}
