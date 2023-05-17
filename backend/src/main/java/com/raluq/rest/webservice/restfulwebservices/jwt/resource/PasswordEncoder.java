package com.raluq.rest.webservice.restfulwebservices.jwt.resource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Configuration

public class PasswordEncoder {

    @Bean
    public static BCryptPasswordEncoder passwordEncoderBean() {
        return new BCryptPasswordEncoder();
    }
}