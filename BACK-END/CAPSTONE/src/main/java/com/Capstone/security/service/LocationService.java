package com.Capstone.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.Location;
import com.Capstone.security.repository.LocationDAO;

import jakarta.persistence.EntityNotFoundException;

@Service
public class LocationService {

	@Autowired private LocationDAO locationRepo;
	
	public Location create(String locationName, String locationCity) {
		Location lo = new Location();
		lo.setLocationName(locationName);
        lo.setLocationCity(locationCity);
        locationRepo.save(lo);
        return lo;
	}

	public Location findLocationById(long id) {
	    if(!locationRepo.existsById(id)) {
			throw new EntityNotFoundException("Location not found.");
		}
		return locationRepo.findById(id).get();
	 }
	
}
