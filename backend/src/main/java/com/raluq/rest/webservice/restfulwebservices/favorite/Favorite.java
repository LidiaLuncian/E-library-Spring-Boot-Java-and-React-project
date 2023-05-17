package com.raluq.rest.webservice.restfulwebservices.favorite;

import com.raluq.rest.webservice.restfulwebservices.book.Book;

import java.util.ArrayList;
import java.util.List;

public class Favorite {
    private List<Book> cart = new ArrayList<>();
    private String client;

    public Favorite() {
    }

    public Favorite(List<Book> cart, String client) {
        this.cart = cart;
        this.client = client;
    }

    public List<Book> getCart() {
        return cart;
    }

    public void setCart(List<Book> cart) {
        this.cart = cart;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }
}
