package com.Capstone.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Capstone.security.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    User findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
	
    Boolean existsByUsernameAndId(String email, Long id);
	
	Boolean existsByEmailAndId(String email, Long id);
}
