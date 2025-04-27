![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-93%25-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

# 🌊 Marea Viva - Plataforma de Apoyo Emocional

Plataforma completa construida con **Java + Spring Boot** en el backend y **React + TailwindCSS** en el frontend.  
Marea Viva conecta usuarios, voluntarios y profesionales para brindar apoyo emocional en tiempo real.

# 🚀 Tecnologías Usadas

## Backend
- Java 17
- Spring Boot 3
- Spring Security (JWT)
- Spring Data JPA (MySQL)
- JavaMailSender (SMTP Email)
- WebSocket (Chat en tiempo real)
- JUnit 5, Mockito, MockMvc (Testing)

## Frontend
- React 18
- Vite
- TailwindCSS 3
- React Hook Form
- React Router DOM
- Axios


# 📂 Estructura del Proyecto

## Backend (Spring Boot)
```
backend/
├── config/         # Configuraciones de seguridad y WebSocket
├── controller/     # APIs públicas (Auth, Chat, Profile, Contact, Collaborators)
├── dto/            # Data Transfer Objects
├── model/          # Entidades JPA (User, Profile, Collaborator, GroupProposal)
├── repository/     # Interfaces de persistencia
├── service/        # Servicios de negocio (UserService, EmailService, etc.)
├── util/           # Utilidades (JWT)
├── exception/      # Global Exception Handler
└── Application.java
```

## Frontend (React + Tailwind)
```
frontend/
├── components/      # Componentes de UI reutilizables (Cards, Header, Footer)
├── pages/           # Pages principales (Register, Login, HomePage, etc.)
├── services/        # Archivo api.js para llamadas a backend
├── assets/          # Imágenes y recursos
├── router/          # PrivateRoute para rutas protegidas
├── App.jsx          # Configuración principal de rutas
└── vite.config.js   # Configuración de Vite
```

---

# ⚙️ Cómo levantar el proyecto localmente

## Backend
```bash
cd backend
./mvnw spring-boot:run
```
Backend activo en `http://localhost:8080`

Asegúrate de tener un archivo `application.properties` correctamente configurado para MySQL y Email.

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend activo en `http://localhost:5173`

### Variables de entorno (opcional)
- Si usas `.env`, definir `VITE_API_URL=http://localhost:8080/api`


# 🔐 Seguridad
- **Login** usando JWT Tokens.
- **Token** almacenado en `localStorage`.
- **PrivateRoute.jsx** protege rutas que requieren autenticación.


# ✅ Historias de Usuario y Criterios de Aceptación

Se incluyen flujos completos como:
- Registro de usuarios, voluntarios y profesionales.
- Creación de perfiles públicos.
- Envío de formularios de colaboración.
- Contacto voluntario vía Email.
- Chat de soporte emocional.
- Inscripción en grupos.



# 🧪 Testing

## Backend
- Tests unitarios para Controladores, Servicios y Modelos.
- Cobertura de código: **>93%** líneas cubiertas.
- Frameworks usados: **JUnit 5**, **Mockito**, **MockMvc**.

```bash
./mvnw test
```

---

# 📬 Contacto

¿Comentarios, mejoras o colaboración?  
📩 **emagmunioz@gmail.com** 💙

---

# 📜 Licencia

Código abierto bajo licencia MIT.

---

