package com.raluq.rest.webservice.restfulwebservices.users.resource;

import com.raluq.rest.webservice.restfulwebservices.users.Client;
import com.raluq.rest.webservice.restfulwebservices.users.User;
import com.raluq.rest.webservice.restfulwebservices.users.repository.UserJpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
@CrossOrigin(origins="http://localhost:4200")
public abstract class UserJpaResource {

    //@GetMapping(path = "/users/{type}")
    public abstract List<? extends User> getUsers();

 //   @GetMapping(path = "users/{type}/{field}")
    public abstract List<? extends User> getUsersByField( @PathVariable String field);

  //  @DeleteMapping("/users/{type}/{id}")
    public abstract ResponseEntity<Void> deleteUser(@PathVariable Long id);

    //@PutMapping("/users/{type}/{id}")
    public abstract ResponseEntity<? extends User> updateUser (@PathVariable Long id, @RequestBody Client user);

   // @PostMapping("/users/{type}")
    public abstract ResponseEntity<Void> create (@RequestBody Client user);





}
