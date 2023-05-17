package com.raluq.rest.webservice.restfulwebservices.order;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import com.raluq.rest.webservice.restfulwebservices.users.Client;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class PlacedOrder {

    @Id
    @SequenceGenerator(
            name = "PlacedOrder_sequence",
            sequenceName = "PlacedOrder_sequence",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PlacedOrder_sequence")
    private Long PlacedOrder_id;
    private String client;
    @OneToMany
    private List<Book> cart = new ArrayList<>();
    @Transient
    private Double value;

    public PlacedOrder() {
    }

    public PlacedOrder(Long PlacedOrder_id, String client, List<Book> cart) {
        this.PlacedOrder_id = PlacedOrder_id;
        this.client = client;
        this.cart = cart;
    }

    public Long getPlacedOrder_id() {
        return PlacedOrder_id;
    }

    public void setPlacedOrder_id(Long PlacedOrder_id) {
        this.PlacedOrder_id = PlacedOrder_id;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public List<Book> getCart() {
        return cart;
    }

    public void setCart(List<Book> cart) {
        this.cart = cart;
    }

    public Double getValue() {
        Double value = 0.0;
        for(Book book: cart){
            value += book.getPrice();
        }
        return value;
    }

    public Double getComputedValue(){
        return this.value;
    }

    public void setValue(Double value) {
        this.value = value;
    }


}
