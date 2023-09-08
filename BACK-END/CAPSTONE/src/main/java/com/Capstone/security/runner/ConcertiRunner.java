package com.Capstone.security.runner;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.Location;
import com.Capstone.security.service.ConcertService;
import com.Capstone.security.service.LocationService;

@Component
public class ConcertiRunner implements CommandLineRunner{

	@Autowired ConcertService cs;
	@Autowired LocationService ls;
	
	@Override
	public void run(String... args) throws Exception {
		 
		// LOCATION
		/*
		Location l1 = ls.create("Stadio S.Siro", "Milan");
		Location l3 = ls.create("Fabrique", "Milan");
		Location l5 = ls.create("Unipol Arena", "Bologna");
		Location l7 = ls.create("Forum d'Assago", "Milan");
		Location l8 = ls.create("Arena di Verona", "Verona");
		Location l9 = ls.create("Ippodromo SNAI", "Milan");
		Location l10 = ls.create("Visarno Arena", "Florence");
		Location l11 = ls.create("Stadio Olimpico", "Rome");
		Location l12 = ls.create("Orion Club", "Rome");
		Location l14 = ls.create("Piazza Napoleone", "Lucca");
		*/
		
		// CONCERTS
		/*
		Concert c1 = cs.create("Taylor Swift: The Eras Tour", LocalDate.of(2024, 7, 15), 1);
		Concert c2 = cs.create("Coldplay", LocalDate.of(2024, 7, 18), 8);
		Concert c3 = cs.create("Twenty One Pilots", LocalDate.of(2024, 5, 7), 10);
		Concert c4 = cs.create("Muse - Firenze Rocks", LocalDate.of(2024, 6, 17), 7);
		Concert c5 = cs.create("Nothing But Thieves", LocalDate.of(2024, 2, 26), 2);
		Concert c6 = cs.create("Bring Me The Horizon", LocalDate.of(2024, 10, 25), 3);
		Concert c7 = cs.create("Gorillaz", LocalDate.of(2024, 5, 12), 5);
		Concert c8 = cs.create("The 1975", LocalDate.of(2024, 3, 19), 4);
		Concert c9 = cs.create("Paolo Nutini", LocalDate.of(2024, 9, 9), 2);
		Concert c10 = cs.create("Inhaler", LocalDate.of(2024, 5, 15), 9);
		Concert c11 = cs.create("IDAYS: Arctic Monkeys", LocalDate.of(2024, 6, 15), 6);
		Concert c12 = cs.create("IDAYS: Florence and The Machine", LocalDate.of(2024, 6, 16), 6);
		Concert c13 = cs.create("Harry Styles", LocalDate.of(2024, 12, 1), 3);
		Concert c14 = cs.create("Metallica", LocalDate.of(2024, 8, 19), 8);
		Concert c15 = cs.create("Blink-182", LocalDate.of(2024, 10, 25), 3);
		Concert c16 = cs.create("Ed Sheeran", LocalDate.of(2024, 7, 21), 1);
		Concert c17 = cs.create("Red Hot Chili Peppers - Firenze Rocks", LocalDate.of(2024, 6, 18), 7);
		Concert c18 = cs.create("Billie Eilish", LocalDate.of(2024, 11, 8), 4);
		Concert c19 = cs.create("Idles", LocalDate.of(2024, 4, 21), 9);
		Concert c20 = cs.create("Blur", LocalDate.of(2024, 7, 22), 10);
		*/
		
		// UPDATE DI LOCATION E DATA
		//cs.updateLocation(1, l7);
		//cs.updateDate(1, LocalDate.of(2024, 9, 9));
		
	}

}
