package com.mareaviva.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic"); // Broker interno para responder a los clientes
        config.setApplicationDestinationPrefixes("/app"); // Prefijo de mensajes enviados por el frontend
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat-websocket") // Ruta de conexión WebSocket
                .setAllowedOrigins("http://localhost:5173") // Permitir solo tu frontend
                .withSockJS(); // Usa SockJS para compatibilidad
    }
}
