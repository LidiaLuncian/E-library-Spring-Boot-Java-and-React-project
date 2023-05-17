package com.raluq.rest.webservice.restfulwebservices.order;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import com.raluq.rest.webservice.restfulwebservices.book.BookJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PlacedOrderJpaResource {

    @Autowired
    private PlacedOrderJpaRepository placedOrderJpaRepository;

    @Autowired
    private BookJpaRepository bookJpaRepository;

    @GetMapping(path = "/placedOrders")
    public List<Book> getAllBooks() {
        return placedOrderJpaRepository.getBooks();
    }

    @GetMapping(path = "/client/{client}")
    public List<PlacedOrder> getPlacedPlacedOrdersByClient(@PathVariable String client) {
        return placedOrderJpaRepository.findByClient(client);
    }

    @PutMapping("orders/drop")
    public ResponseEntity<Void> removeOrder(){
        placedOrderJpaRepository.deleteBooks();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<Void> deletePlacedPlacedOrder(@PathVariable Long id) {
        placedOrderJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/orders/addBook/{bookId}")
    public ResponseEntity<PlacedOrder> addBook(@PathVariable Long bookId){
        if(bookJpaRepository.existsById(bookId)){
            Book book = bookJpaRepository.getById(bookId);
            placedOrderJpaRepository.addBook(book);
            bookJpaRepository.save(book);
        }
        else{
            throw new IllegalStateException("The book you are trying to buy is not available");
        }
        return new ResponseEntity<PlacedOrder>( HttpStatus.OK);
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<PlacedOrder> updatePlacedPlacedOrder(@PathVariable Long id, @RequestBody PlacedOrder placedOrder) {
        if (id != -1) {
            PlacedOrder updatedPlacedOrder = placedOrderJpaRepository.updateOrder(id, placedOrder);
        } else {
            throw new IllegalStateException("The order with the id " + id + " does not exist!");
        }
        return new ResponseEntity<PlacedOrder>(placedOrder, HttpStatus.OK);
    }

    @PostMapping("/client/{client}/placedOrders/{discount}")
    public PlacedOrder placeOrder(@PathVariable String client, @PathVariable String discount) {
            PlacedOrder createdPlacedOrder = placedOrderJpaRepository.checkOut(client, discount);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdPlacedOrder.getPlacedOrder_id()).toUri();
            return createdPlacedOrder;
    }
}
