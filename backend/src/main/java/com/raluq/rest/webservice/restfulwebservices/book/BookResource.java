package com.raluq.rest.webservice.restfulwebservices.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookResource {

    @Autowired
    private  BookHardcodedService bookHardcodedService;

    @GetMapping(path = "/title/{title}/books")
    public List<Book> getAllBooks(@PathVariable String title){
        return bookHardcodedService.findAll();
    }
}
