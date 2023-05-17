package com.raluq.rest.webservice.restfulwebservices.book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookJpaRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b where b.title = :title")
    List<Book> findByTitle(String title);

    @Query("SELECT b FROM Book b where b.author = :author")
    List<Book> findByAuthor(String author);

    @Query("SELECT b FROM Book b where b.format = :format")
    List<Book> findByFormat(Format format);

    @Query("SELECT b FROM Book b where b.title = :title and b.author = :author and  b.format = :format")
    List<Book> findByTitleAndAuthorAndFormat(String title, String author, Format format);

    @Query("SELECT b FROM Book b where b.id = :id")
    Book getById(Long id);

    @Query("SELECT b FROM Book b where LOWER(b.genre) = LOWER(:genre)")
    List<Book> findByGenre(String genre);
}
