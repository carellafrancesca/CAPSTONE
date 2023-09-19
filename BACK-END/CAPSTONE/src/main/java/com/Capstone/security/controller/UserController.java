package com.Capstone.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone.security.entity.User;
import com.Capstone.security.service.UserService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {

	 @Autowired private UserService userService;

	 @GetMapping("{id}")
	 public ResponseEntity<User> getUserById(@PathVariable Long id) {
	      User user = userService.getById(id);
	      return new ResponseEntity<>(user, HttpStatus.OK);
	 }
	 
	 @GetMapping("/{userId}/username")
	 public ResponseEntity<String> getUsernameById(@PathVariable Long userId) {
	     try {
	         String username = userService.getUsernameById(userId);
	         return ResponseEntity.ok(username);
	     } catch (EntityNotFoundException ex) {
	         return ResponseEntity.notFound().build();
	     }
	 }

	 @PutMapping("/{id}")
	 public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
	      User user = userService.update(id, updatedUser);
	      return new ResponseEntity<>(user, HttpStatus.OK);
	 }

	 @DeleteMapping("/{id}")
	 @PreAuthorize("hasRole('ADMIN')")
	 public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
	      userService.delete(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	 }
	
}
	