package com.raluq.rest.webservice.restfulwebservices.users.resource;

import com.raluq.rest.webservice.restfulwebservices.users.Admin;
import com.raluq.rest.webservice.restfulwebservices.users.Client;
import com.raluq.rest.webservice.restfulwebservices.users.User;
import com.raluq.rest.webservice.restfulwebservices.users.repository.AdminJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AdminJpaResource extends UserJpaResource {

    @Autowired
    private AdminJpaRepository adminJpaRepository;

    @Override
    @GetMapping("/users/admin")
    public List<Admin> getUsers() {
        return adminJpaRepository.findAll();
    }

    @Override
    @GetMapping(path = "users/admin/{field}")
    public List<Admin> getUsersByField(@PathVariable String username) {
        List<Admin> admins = adminJpaRepository.findByUsername(username);
        return admins;
    }

    @Override
    @DeleteMapping("/users/admin/{id}")
    public ResponseEntity<Void> deleteUser(Long id) {
        throw new IllegalStateException("This operation is illegal!");
    }


    @Override
    @PutMapping("/users/admin/{id}")
    public ResponseEntity<Admin> updateUser(Long id, Client user) {
        throw new IllegalStateException("This operation is illegal!");
    }

    @Override
    @PostMapping("/users/admin")
    public ResponseEntity<Void> create(Client user){
        throw new IllegalStateException("This operation is illegal!");
    }
}
