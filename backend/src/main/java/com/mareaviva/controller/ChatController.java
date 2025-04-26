package com.mareaviva.controller;

import com.mareaviva.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/sendMessage") // Los mensajes que llegan a /app/sendMessage
    @SendTo("/topic/messages")      // Se envían a todos los suscritos a /topic/messages
    public ChatMessage sendMessage(ChatMessage message) {
        System.out.println("Nuevo mensaje recibido: " + message.getText());
        return message; // Retorna para que lo reciban todos los conectados
    }
}
