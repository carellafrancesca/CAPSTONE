package com.Capstone.security.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.Location;
import com.Capstone.security.service.ConcertService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/concerts")
public class ConcertController {

	@Autowired ConcertService cs;
	
	@GetMapping("{id}")
	public Concert getConcertById(@PathVariable long id) {
	    Concert concert = cs.findConcertById(id);
	    return concert;
	}

	@GetMapping("/byLocation/{locationCity}")
	public List<Concert> findConcertsByLocation(@PathVariable String locationCity) {
	    return cs.findConcertsByLocation(locationCity);
	}
	
	/*@DeleteMapping("/concerts/{id}")
	public String deleteConcert(@PathVariable long id) {
	    return cs.delete(id);
	}*/
}
