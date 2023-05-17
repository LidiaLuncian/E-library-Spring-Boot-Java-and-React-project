package com.raluq.rest.webservice.restfulwebservices.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@CrossOrigin(origins={"http://localhost:4200", "https://www.google.com/"})
public class BookJpaResource {

    @Autowired
    private BookJpaRepository bookJpaRepository;

    @GetMapping(path="/books")
    public List<Book> getBooks(){
        return bookJpaRepository.findAll();
    }

    @GetMapping(path="/title/{title}")
    public List<Book> getBooksByTitle(@PathVariable String title){
        return bookJpaRepository.findByTitle(title);
    }

    @GetMapping(path="/books/{id}")
    public Book getBookById(@PathVariable Long id){
        return bookJpaRepository.findById(id).get();
    }

    @GetMapping(path="/author/{author}")
    public List<Book> getBooksByAuthor(@PathVariable String author){
        return bookJpaRepository.findByAuthor(author);
    }

    @GetMapping(path="/format/{format}")
    public List<Book> getBooksByFormat(@PathVariable String format){
        Format format1 = Format.valueOf(format);
        return bookJpaRepository.findByFormat(format1);
    }

    @GetMapping(path = "/genre/{genre}")
    public List<Book> getBooksByGenre(@PathVariable String genre){
        return bookJpaRepository.findByGenre(genre);
    }

    @GetMapping("/search/{keyWord}")
    public List<Book> getBySearch(@PathVariable String keyWord){
        List<Book> books = bookJpaRepository.findAll();
        List<Book> booksFound = new ArrayList<>();
        for(Book book: books){
            if(book.getTitle().toLowerCase().contains(keyWord) || book.getAuthor().toLowerCase().contains(keyWord)){
                booksFound.add(book);
            }
        }
        return booksFound;
    }


    @DeleteMapping("/books/{id}")
    public ResponseEntity<Void> deleteBook( @PathVariable Long id){
        bookJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook( @PathVariable Long id, @RequestBody Book book){
        if(id != -1){
            Book updatedBook = bookJpaRepository.save(book);
        }
        else{
            createBook(book);
        }

        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<Void> createBook(@RequestBody Book book){
        List<Book> books = bookJpaRepository.findByTitleAndAuthorAndFormat(book.getTitle(), book.getAuthor(), book.getFormat());
        if(books.isEmpty()){
            Book createdBook = bookJpaRepository.save(book);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdBook.getId()).toUri();
            return ResponseEntity.created(uri).build();
        }
        else{
            throw new IllegalStateException("This book is already in stock!");
        }
    }

}
