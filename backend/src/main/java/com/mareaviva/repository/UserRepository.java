package com.mareaviva.repository;

import com.mareaviva.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    // 🚀 Nuevo: listar usuarios por rol (por ejemplo, voluntarios)
    List<User> findByRole(String role);
}
