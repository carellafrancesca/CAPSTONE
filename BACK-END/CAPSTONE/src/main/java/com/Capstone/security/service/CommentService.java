package com.Capstone.security.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Capstone.security.entity.Comment;
import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.User;
import com.Capstone.security.repository.CommentDAO;
import com.Capstone.security.repository.ConcertDAO;

@Component
public class CommentService {

	@Autowired private CommentDAO commentRepo;
	
	public Comment createComment(User user, String commentText, Concert concert) {
	    Comment newComment = new Comment();
	    newComment.setCommentText(commentText);
	    newComment.setCommentDate(LocalDate.now());
	    newComment.setUser(user);
	    newComment.setConcert(concert);
	    return commentRepo.save(newComment);
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
