package com.mareaviva.controller;

import com.mareaviva.repository.ProfileRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProfileController.class)
@AutoConfigureMockMvc(addFilters = false)
class ProfileControllerUploadTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProfileRepository profileRepository;

    @Test
    void shouldCreateProfileWithImage() throws Exception {
        MockMultipartFile image = new MockMultipartFile(
                "image",
                "profile.jpg",
                "image/jpeg",
                "Fake Image Content".getBytes()
        );

        mockMvc.perform(multipart("/api/profile")
                        .file(image)
                        .param("firstName", "John")
                        .param("lastName", "Doe")
                        .param("role", "VOLUNTEER")
                        .param("description", "Helping others"))
                .andExpect(status().isOk());
    }
}
