package com.Capstone.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.Capstone.security.entity.Concert;
import com.Capstone.security.entity.Location;

@Configuration
@PropertySource("classpath:application.properties")
public class GestioneEventiConfig {

	@Bean("concert")
    @Scope("prototype")
    public Concert concerto() {
        return new Concert();
    }
	
	@Bean("location")
    @Scope("prototype")
    public Location location() {
        return new Location();
    }
	
}
