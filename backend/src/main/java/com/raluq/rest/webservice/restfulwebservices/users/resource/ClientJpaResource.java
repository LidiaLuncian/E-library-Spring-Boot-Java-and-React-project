package com.raluq.rest.webservice.restfulwebservices.users.resource;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import com.raluq.rest.webservice.restfulwebservices.jwt.JwtInMemoryUserDetailsService;
import com.raluq.rest.webservice.restfulwebservices.users.Admin;
import com.raluq.rest.webservice.restfulwebservices.users.Client;
import com.raluq.rest.webservice.restfulwebservices.users.User;
import com.raluq.rest.webservice.restfulwebservices.users.repository.ClientJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8008" })
public class ClientJpaResource extends UserJpaResource{

    public static long id = 1;

    @Autowired
    private ClientJpaRepository clientJpaRepository;

    @Autowired
    JwtInMemoryUserDetailsService jwtInMemoryUserDetailsService;

    @Override
    @GetMapping("/users/client")
    public List<Client> getUsers() {
       return clientJpaRepository.findAll();
    }

    @Override
    @GetMapping(path = "users/client/{username}")
    public List<Client> getUsersByField(@PathVariable String username) {
        List<Client> clients = clientJpaRepository.findByUsername(username);
        return clients;
    }


    @Override
    @DeleteMapping("/users/client/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        clientJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    @PutMapping("/users/client/{id}")
    public ResponseEntity<Client> updateUser(@PathVariable Long id, @RequestBody Client user) {
       // Client client = new Client(user.getUser_id(), user.getUsername(), user.getPassword(), user.getEmail(), user.getAddress());

        if(id !=  -1){
            Client updatedClient =clientJpaRepository.save(user);
        }
        else{
            //throw new IllegalStateException("The user with the id " + id + " does not exist");
            create(user);
        }
        return new ResponseEntity<Client>(user, HttpStatus.OK);
    }

    @Override
    @PostMapping("/users/client")
    public ResponseEntity<Void> create(@RequestBody Client user) {
        List<Client> clients = clientJpaRepository.findByEmail(user.getEmail());
        if(clients.isEmpty()){
            if(user.getUser_id() == 0 || user.getUser_id()  == -1 || user.getUser_id() == null){
                for(int i = 1; i < 10000; i++){
                    if(!clientJpaRepository.existsById((long) i)){
                        id = i;
                        break;
                    }
                }
                user.setUser_id(id);
            }
           // Client client = new Client(user.getUser_id(), user.getUsername(), user.getPassword(), user.getEmail(), user.getAddress());
            Client newClient =  clientJpaRepository.save(user);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newClient.getUser_id()).toUri();
            JwtInMemoryUserDetailsService.addUser(newClient.getUser_id(), newClient.getUsername(), newClient.getPassword());
            return ResponseEntity.created(uri).build();
        }
        else{
            throw new IllegalStateException("This email is already taken!");
        }
    }
}
