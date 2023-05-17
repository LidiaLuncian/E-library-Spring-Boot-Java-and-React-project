package com.raluq.rest.webservice.restfulwebservices.book;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Book {
    @Id
    @SequenceGenerator(
            name = "book_sequence",
            sequenceName = "book_sequence",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_sequence")
    private Long id;
    private String title;
    private String author;
    private String genre;
    private Format format;
    private Integer quantity;
    private Double price;
    private String imagePath;

    public Book() {
    }


    public Book(Long id, String title, String author, String genre, Format format, Integer quantity, Double price,  String imagePath) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.format = format;
        this.quantity = quantity;
        this.price = price;
        this.imagePath = imagePath;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Format getFormat() {
        return format;
    }

    public void setFormat(Format format) {
        this.format = format;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", genre='" + genre + '\'' +
                ", format=" + format + '\'' +
                ", quantity= " + quantity + '\'' +
                ", price= " + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(id, book.id) && Objects.equals(title, book.title) && Objects.equals(author, book.author) && Objects.equals(genre, book.genre) && format == book.format && Objects.equals(quantity, book.quantity) && Objects.equals(price, book.price) && Objects.equals(imagePath, book.imagePath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, author, genre, format, quantity, price, imagePath);
    }
}
