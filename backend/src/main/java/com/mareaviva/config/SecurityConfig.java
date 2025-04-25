package com.mareaviva.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Desactivamos CSRF
            .authorizeHttpRequests((requests) -> requests
                .anyRequest().permitAll() // TODO: Más adelante configurar bien la seguridad
            );
        return http.build();
    }
}
