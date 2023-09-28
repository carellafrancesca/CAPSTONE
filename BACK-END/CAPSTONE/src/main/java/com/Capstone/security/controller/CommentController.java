package com.Capstone.security.controller;

import java.time.LocalDate;
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
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@PostMapping("/post/{idConcert}")
	public ResponseEntity<String> createPost(@RequestBody Comment comment, @PathVariable Long idConcert) {
		 Comment com = coms.createComment(comment.getCommentText(),comment.getCommentDate(), comment.getUsernameAuthor(), idConcert);
		 return ResponseEntity.status(HttpStatus.CREATED).body("Post created successfully!");
	}
	
    @GetMapping("/user/{usernameAuthor}")
    public ResponseEntity<List<Comment>> getCommentsByUsernameAuthor(@PathVariable String usernameAuthor) {
        List<Comment> comments = coms.getCommentsByUsernameAuthor(usernameAuthor);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
	
	@GetMapping("/concert/{concertId}")
	public ResponseEntity<List<Comment>> getCommentsByConcertId(@PathVariable("concertId") Long concertId) {
	    List<Comment> comments = coms.getCommentsByConcertId(concertId);
	    return new ResponseEntity<>(comments, HttpStatus.OK);
	}

	@DeleteMapping("/{commentId}")
	public ResponseEntity<Void> deleteCommentById(@PathVariable Long commentId) {
	    coms.deleteCommentById(commentId);
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
