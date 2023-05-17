package com.raluq.rest.webservice.restfulwebservices.book;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookHardcodedService {

    private static List<Book> books = new ArrayList<>();
    private static long idCounter = 0;

    static {
        books.add(new Book(++idCounter, "aaa", "aaaa", "aaaa", Format.HARDCOVER, 10, 15.0,""));
        books.add(new Book(++idCounter, "aaa", "aaaa", "aaaa", Format.EBOOK, 2, 9.9, ""));

    }

    public  List<Book> findAll(){
        return books;
    }
}
