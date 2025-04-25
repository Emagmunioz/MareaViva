package com.mareaviva.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ping")
public class PingController {

    @GetMapping
    public ResponseEntity<?> ping() {
        return ResponseEntity.ok().body("{\"message\":\"Marea Viva API funcionando correctamente\"}");
    }
}