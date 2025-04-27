package com.mareaviva;
import com.mareaviva.Application;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
@SpringBootTest(classes = Application.class)
class ApplicationTest {

    @Test
    void contextLoads() {
        // Solo verificar que el contexto carga correctamente
    }
}
