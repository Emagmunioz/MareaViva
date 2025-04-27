![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-93%25-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

# 🌊 Marea Viva - Plataforma de Apoyo Emocional

Backend de la plataforma **Marea Viva**, donde usuarios, voluntarios y profesionales se conectan para brindar acompañamiento emocional, a través de formularios, perfiles, email automático y chats en tiempo real.

## 🚀 Tecnologías Usadas

**Backend:**
- Java 17
- Spring Boot 3
- Spring Web
- Spring Security (JWT)
- Spring Data JPA (MySQL)
- JavaMailSender (Correo SMTP)
- WebSocket (Chat en tiempo real)

**Testing:**
- JUnit 5
- Mockito
- Spring Boot Test (MockMvc)
- Jackson + JavaTimeModule (Serialización JSON)

---

## 📚 Estructura del Proyecto

```
backend/
├── config/         # Configuraciones de seguridad y WebSocket
├── controller/     # Controladores REST (Auth, Chat, Profile, Contact, Collaborator)
├── dto/            # Objetos de transferencia (UserRegistration, LoginRequest)
├── model/          # Entidades JPA (User, Profile, Collaborator, GroupProposal)
├── repository/     # Interfaces JPA
├── service/        # Servicios (UserService, EmailService, CollaboratorService)
├── util/           # Utilidades (JWT Token)
├── exception/      # Manejador Global de Errores
└── Application.java
```

---

## 🔥 Principales Funcionalidades

- Registro seguro de usuarios con rol dinámico (usuario, voluntario, profesional).
- Creación de perfiles públicos para usuarios y voluntarios.
- Envío de formularios de colaboración de profesionales y grupos.
- Email automáticos para conexión entre usuarios-voluntarios.
- Chat en tiempo real mediante WebSocket.
- Autenticación segura mediante JWT tokens.

---

## ✅ Historias de Usuario y Criterios de Aceptación

### 🏠 HomePage
**Historia:** Conocer el propósito de Marea Viva, pilares, testimonios y participar.
- Sección introductoria.
- Cards para usuarios, voluntarios y profesionales.
- "Sobre Nosotros", "Impacto Social" y "Participa".
- Header y Footer accesibles.

### 🔍 HowItWorks
**Historia:** Entender pasos del proceso de acompañamiento.
- 6 pasos con StepCards.
- Enlaces funcionales.
- Modal SOS y grid responsivo.

### 👤 ProfileForm
**Historia:** Completar perfil con rol, foto y descripción.
- Elección de rol.
- Subida de imagen.
- Guardado de perfil.
- Redirección a Dashboard.

### 📋 EmotionEvaluation
**Historia:** Completar cuestionario emocional.
- Preguntas emocionales.
- Activar modal en señales de riesgo.
- Redirección a Chat.

### 💬 ChatSupport
**Historia:** Comunicación en tiempo real con un voluntario.
- Chat funcional.
- Scroll automático.

### 🤝 GroupsFormPage
**Historia:** Inscripción en sesiones grupales.
- Formulario simple.
- Confirmación textual.

### 🙋‍♂️ VolunteersPage
**Historia:** Información y motivación para voluntarios.
- Texto inspirador y botón a ProfileForm.

### 🧑‍⚕️ FoundationsPage
**Historia:** Información para profesionales y fundaciones.
- Cards de alianzas.
- Texto explicativo.

### 📩 ContactPage
**Historia:** Contactar al equipo o apoyar económicamente.
- Formulario de contacto.
- Integración con ParticipaApoyaSection.

---

## 🧪 Testing

- Tests unitarios para Controladores, Servicios, Modelos y Utilidades.
- Cobertura total de código de más del **93%**.
- Testeados casos exitosos y errores controlados.


```bash
./mvnw test
```

---

## 📬 Contacto

¿Comentarios o sugerencias?  
📩 **emagmunioz@gmail.com** 💙

---

## 📜 Licencia

Código abierto bajo licencia MIT License.

