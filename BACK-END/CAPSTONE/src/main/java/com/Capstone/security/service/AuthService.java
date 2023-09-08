package com.Capstone.security.service;

import com.Capstone.security.payload.LoginDto;
import com.Capstone.security.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
