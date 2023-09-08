package com.Capstone.security.service;

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
	
	public String delete(long id) {
		if(!RUserRepo.existsById(id))
			throw new EntityNotFoundException("User not found");
		RUserRepo.deleteById(id);
		return "User deleted successfully";
	}
	
}
