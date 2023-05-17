package com.raluq.rest.webservice.restfulwebservices.favorite;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavouriteService {
    private static Favorite favorite = new Favorite();
    private static List<Favorite> favorites = new ArrayList<>();

    public List<Book> favByClient(String client){
        for(Favorite favorite: favorites){
            if(favorite.getClient().equals(client)){
                return favorite.getCart();
            }
        }
        return null;
    }

    public List<Favorite> findAll(){
        return favorites;
    }

    public Favorite addBook(String client, Book book){
        for(Favorite favorite: favorites){
            if(favorite.getClient().equals(client)){
                for(Book book1: favorite.getCart()){
                    if(book1.equals(book)){
                        throw new IllegalStateException("This book is already in you favourites");

                    }
                }
                favorite.getCart().add(book);
                return favorite;
            }
            else {
                throw new IllegalStateException("This book is available");
            }
        }
        Favorite favorite = new Favorite();
        favorite.setClient(client);
        List<Book> books = new ArrayList<>();
        books.add(book);
        favorite.setCart(books);
        favorites.add(favorite);
        return favorite;
    }

    public void removeBook(String client, Book book){
        for(Favorite favorite: favorites){
            if(favorite.getClient().equals(client)){
                favorite.getCart().remove(book);
                return;
            }
            else {
                throw new IllegalStateException("This book is available");
            }
        }
        throw new IllegalStateException("The client " + client + " doesn't have an account.");
    }
}
