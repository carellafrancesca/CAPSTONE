package com.Capstone.security.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Capstone.security.entity.Comment;
import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.User;
import com.Capstone.security.repository.CommentDAO;
import com.Capstone.security.repository.ConcertDAO;
import com.Capstone.security.repository.UserRepository;

@Service
public class CommentService {

	@Autowired private CommentDAO commentRepo;
	@Autowired @Qualifier("comment") private ObjectProvider<Comment> provider;
	@Autowired private UserService us;
	@Autowired private ConcertService cs;
	
	public Comment createComment(String commentText, LocalDate commentDate, String usernameAuthor, Long idConcert) {
	    Comment com = provider.getObject();
	    com.setCommentText(commentText);
	    com.setCommentDate(commentDate);
	    com.setUsernameAuthor(usernameAuthor);
	    com.setConcert(cs.findConcertById(idConcert));
		commentRepo.save(com);
		return com;
	}
	 
	public List<Comment> getCommentsByConcertId(long id) {
	    return commentRepo.findByConcertId(id);
	}
	 
	public void deleteCommentById(long id) {
	    commentRepo.deleteById(id);
	}
	
}
