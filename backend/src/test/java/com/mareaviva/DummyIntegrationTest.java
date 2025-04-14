
package com.mareaviva;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
@ActiveProfiles("test")
@SpringBootTest
public class DummyIntegrationTest {

    @Test
    void contextLoads() {
        assertThat(true).isTrue();
    }
}
