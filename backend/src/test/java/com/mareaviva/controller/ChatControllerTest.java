package com.mareaviva.controller;

import com.mareaviva.model.ChatMessage;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ChatControllerTest {

    private final ChatController chatController = new ChatController();

    @Test
    void shouldReturnSameMessage() {
       
        ChatMessage message = new ChatMessage();
        message.setText("Hola Mundo");

       
        ChatMessage response = chatController.sendMessage(message);

        
        assertEquals("Hola Mundo", response.getText());
    }
}
