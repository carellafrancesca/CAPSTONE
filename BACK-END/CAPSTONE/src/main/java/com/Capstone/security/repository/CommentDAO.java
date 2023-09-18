package com.Capstone.security.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Capstone.security.entity.Comment;
import com.Capstone.security.entity.User;

public interface CommentDAO extends CrudRepository<Comment, Long>{

	List<Comment> findByUser(User user);
	
	List<Comment> findByConcertId(long id);
		
}
