package com.Capstone.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Capstone.security.entity.ERole;
import com.Capstone.security.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
