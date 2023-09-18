package com.Capstone.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone.security.entity.Comment;
import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.User;
import com.Capstone.security.service.CommentService;
import com.Capstone.security.service.ConcertService;
import com.Capstone.security.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/comments")
public class CommentController {

	@Autowired CommentService coms;
	@Autowired UserService userService;
	@Autowired ConcertService concertSvc;
	
	@PostMapping("/concert/{concertId}/user/{userId}")
	public ResponseEntity<Comment> createComment(
	        @PathVariable Long concertId,
	        @PathVariable Long userId,
	        @RequestBody Comment comment) {
	    User user = userService.getById(userId);
	    Concert concert = concertSvc.findConcertById(concertId);
	    Comment newComment = coms.createComment(user, comment.getCommentText(), concert);
	    return new ResponseEntity<>(newComment, HttpStatus.CREATED);
	}
	
	@GetMapping("/user/{userId}")
    public ResponseEntity<List<Comment>> getCommentsByUserId(@PathVariable long id) {
		User user = userService.getById(id);
        List<Comment> comments = coms.getAllCommentsByUser(user);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
	
	@GetMapping("/concert/{concertId}")
	public ResponseEntity<List<Comment>> getCommentsByConcertId(@PathVariable long id) {
	    List<Comment> comments = coms.getCommentsByConcertId(id);
	    return new ResponseEntity<>(comments, HttpStatus.OK);
	}

	@DeleteMapping("/{commentId}")
	public ResponseEntity<Void> deleteCommentById(@PathVariable Long commentId) {
	    coms.deleteCommentById(commentId);
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
