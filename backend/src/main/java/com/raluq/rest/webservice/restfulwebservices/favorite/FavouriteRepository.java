package com.raluq.rest.webservice.restfulwebservices.favorite;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import com.raluq.rest.webservice.restfulwebservices.book.BookJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FavouriteRepository {

    @Autowired
    private FavouriteService favouriteService;

    @Autowired
    private BookJpaRepository bookJpaRepository;

    @GetMapping("/client/{username}/favourites")
    public List<Book> getClientFavourites(@PathVariable String username){
        return favouriteService.favByClient(username);
    }

    @GetMapping("/admin/favourites")
    public List<Favorite> getAllFavourites(){
        return favouriteService.findAll();
    }

    @PutMapping("/client/{username}/favourites/remove/{bookId}")
    public ResponseEntity<Book> deleteBook(@PathVariable String username, @PathVariable Long bookId){
        if(bookJpaRepository.existsById(bookId)){
            Book book = new Book();
            book = bookJpaRepository.getById(bookId);
            favouriteService.removeBook(username, book);
            return new ResponseEntity<Book>(book, HttpStatus.OK);
        }
        throw new IllegalStateException("Cannot update list of favourites");
    }

    @PutMapping("/client/{username}/favourites/add/{bookId}")
    public ResponseEntity<Book> addBook(@PathVariable String username, @PathVariable Long bookId){
        if(bookJpaRepository.existsById(bookId)){
            Book book = new Book();
            book = bookJpaRepository.getById(bookId);
            favouriteService.addBook(username, book);
            return new ResponseEntity<Book>(book, HttpStatus.OK);
        }
        throw new IllegalStateException("Cannot update list of favourites");
    }


}
