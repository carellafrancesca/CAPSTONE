package com.Capstone.security.service;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.Location;
import com.Capstone.security.repository.ConcertDAO;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ConcertService {

	@Autowired private ConcertDAO concertRepo;
	@Autowired private LocationService locations;
	
	public Concert create(String concertName, LocalDate eventDate, long id) {
		Concert co = new Concert();
		co.setConcertName(concertName);
        co.setEventDate(eventDate);
        co.setLocation(locations.findLocationById(id));
        concertRepo.save(co);
        return co;
	}
	
	public Concert updateLocation(long id, Location location) {
		Concert existingConcert = concertRepo.findById(id)
		           .orElseThrow(() -> new EntityNotFoundException("Concert not found"));

		existingConcert.setLocation(location);
		Concert updatedConcert = concertRepo.save(existingConcert);
		return updatedConcert;
	}
			
	public Concert updateDate(long id, LocalDate eventDate) {
		Concert existingConcert = concertRepo.findById(id)
		           .orElseThrow(() -> new EntityNotFoundException("Concert not found"));

		existingConcert.setEventDate(eventDate);
		Concert updatedConcert = concertRepo.save(existingConcert);
		return updatedConcert;
	}
	
	 public Concert findConcertById(long id) {
	    if(!concertRepo.existsById(id)) {
			throw new EntityNotFoundException("Concert not found.");
		}
		return concertRepo.findById(id).get();
	 }

	 public List<Concert> findConcertsByLocation(String locationCity) {
		    return concertRepo.findByLocation_LocationCity(locationCity);
	 }
	
	 /*public String deleteConcertById(long id) {
		   if (concertRepo.existsById(id)) {
		       Concert co = findConcertById(id);
		       concertRepo.delete(co);
		       return "Concert deleted successfully!";
		   } else {
		       return "No concerts with this ID.";
		   }
	 }*/
	
}
