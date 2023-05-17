package com.raluq.rest.webservice.restfulwebservices.book;


public enum Format {
    HARDCOVER("Hardcover"),
    PAPERBACK("Paperback"),
    EBOOK("eBook");

    private String name;

    Format(String name){
        this.name = name;
    }
}

