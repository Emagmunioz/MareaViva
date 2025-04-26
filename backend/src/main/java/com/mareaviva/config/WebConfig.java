package com.mareaviva.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Permitir CORS para el frontend en localhost:5173
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Agregamos OPTIONS para WebSocket
                .allowedHeaders("*")
                .allowCredentials(true); // Opcional: si vas a usar sesiones/cookies
    }

    // Servir archivos de /uploads y recursos estáticos como default-profile.png
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Para las imágenes subidas (uploads/)
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");

        // Para el default-profile.png (en static/)
        registry.addResourceHandler("/default-profile.png")
                .addResourceLocations("classpath:/static/");
    }
}
