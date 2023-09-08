package com.Capstone.security.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import com.Capstone.security.entity.Concert;

public interface ConcertDAO extends CrudRepository<Concert, Long>{

	List<Concert> findByLocation_LocationCity(String locationCity);

	List<Concert> findByConcertName(String concertName);
	
}
