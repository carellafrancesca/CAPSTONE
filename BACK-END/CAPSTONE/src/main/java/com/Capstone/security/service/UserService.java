package com.Capstone.security.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.security.entity.User;
import com.Capstone.security.repository.UserRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

	@Autowired private UserRepository RUserRepo;
	
	public User getById(long id) {
	    if (!RUserRepo.existsById(id))
	        throw new EntityNotFoundException("User not found");
	    return RUserRepo.findById(id).orElse(null);
	}

	public User update(Long id, User ru) {
	    if (!RUserRepo.existsById(id) || ru.getId() != id)
	        throw new EntityNotFoundException("User not found");
	    if (RUserRepo.existsByEmailAndId(ru.getEmail(), ru.getId()))
	        throw new EntityExistsException("Email already existing");
	    if (RUserRepo.existsByUsernameAndId(ru.getUsername(), ru.getId()))
	        throw new EntityExistsException("Username already existing");
	    return RUserRepo.save(ru);
	}
	
	public String getUsernameById(Long userId) {
	    Optional<User> userOptional = RUserRepo.findById(userId);
	    if (userOptional.isPresent()) {
	        User user = userOptional.get();
	        return user.getUsername();
	    } else {
	        throw new EntityNotFoundException("User not found with ID: " + userId);
	    }
	}
	
	public User getByUsername(String username) {
		User us = RUserRepo.findByUsername(username);
		return us;
	}
    
	public String delete(long id) {
		if(!RUserRepo.existsById(id))
			throw new EntityNotFoundException("User not found");
		RUserRepo.deleteById(id);
		return "User deleted successfully";
	}

}
