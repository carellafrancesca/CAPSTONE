package com.Capstone.security.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Capstone.security.entity.Comment;
import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.User;
import com.Capstone.security.repository.CommentDAO;
import com.Capstone.security.repository.ConcertDAO;

@Service
public class CommentService {

	@Autowired private CommentDAO commentRepo;
	
	public Comment createComment(Comment comment) {
	    return commentRepo.save(comment);
	}
	
	 public List<Comment> getAllCommentsByUser(User user) {
	        return commentRepo.findByUser(user);
	 }
	 
	 public List<Comment> getCommentsByConcertId(long id) {
	        return commentRepo.findByConcertId(id);
	 }
	 
	 public void deleteCommentById(long id) {
	        commentRepo.deleteById(id);
	 }
	
}
