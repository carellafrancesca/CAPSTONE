package com.Capstone.security.service;

import com.Capstone.security.payload.LoginDto;
import com.Capstone.security.payload.RegisterDto;
import com.Capstone.security.payload.RegisterResponse;

public interface AuthService {
    
	String login(LoginDto loginDto);
    RegisterResponse register(RegisterDto registerDto);
    
}
