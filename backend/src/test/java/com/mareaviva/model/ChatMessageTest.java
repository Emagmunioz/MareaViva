package com.mareaviva.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ChatMessageTest {

    @Test
    void shouldSetAndGetAllFields() {
        ChatMessage message = new ChatMessage();

        message.setFrom("User");
        message.setText("Hello World");

        assertEquals("User", message.getFrom());
        assertEquals("Hello World", message.getText());
    }

    @Test
    void shouldCreateChatMessageWithConstructor() {
        ChatMessage message = new ChatMessage("User", "Hello World");

        assertEquals("User", message.getFrom());
        assertEquals("Hello World", message.getText());
    }
}
