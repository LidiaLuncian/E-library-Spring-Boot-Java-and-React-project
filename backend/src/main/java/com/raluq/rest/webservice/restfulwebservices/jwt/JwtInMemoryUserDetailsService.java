package com.raluq.rest.webservice.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class  JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
            "$2a$10$sB6l0nVpeY.N1Js6CLsQf.pJBZyLMJiqIAnS084PxKHpuLtV3p3Nm", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "raluq",
            "$2a$10$y4mzAQaZCLXwAU9u0duwgu7jwM0dk/nEjpvuvetDXIZ1Mz/iIhXz6", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(3L, "lidia",
            "$2a$10$y4mzAQaZCLXwAU9u0duwgu7jwM0dk/nEjpvuvetDXIZ1Mz/iIhXz6", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
            .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

  public static List<JwtUserDetails> getInMemoryUserList() {
    return inMemoryUserList;
  }

  public static void addUser(Long id, String username, String password){
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    String encodedPass ="";
    for(int i = 1; i <= 20; i++){
      encodedPass = bCryptPasswordEncoder.encode(password);
      int dot = 0;
      for(int j = 0; j < encodedPass.length(); j++){
        if(encodedPass.charAt(j)== '.'){
          dot++;
        }
        if(dot == 2){
          inMemoryUserList.add(new JwtUserDetails(id, username, encodedPass, "ROLE_USER_2"));
         return;
        }
      }



    }


  }
}

