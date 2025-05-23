package com.mareaviva.controller;

import com.mareaviva.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/sendMessage") 
    @SendTo("/topic/messages")      
    public ChatMessage sendMessage(ChatMessage message) {
        System.out.println("Nuevo mensaje recibido: " + message.getText());
        return message; 
    }
}
