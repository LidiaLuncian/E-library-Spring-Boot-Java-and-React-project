package com.raluq.rest.webservice.restfulwebservices.order;

import com.raluq.rest.webservice.restfulwebservices.book.Book;
import com.raluq.rest.webservice.restfulwebservices.book.Format;
import com.raluq.rest.webservice.restfulwebservices.order.PlacedOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class PlacedOrderJpaRepository {

    private static List<PlacedOrder> orders = new ArrayList<>();
    private static List<Book> books = new ArrayList<>();
    private static long orderIdCounter = 1;

    @PersistenceContext
    private EntityManager entityManager;

    public List<PlacedOrder> findAll(){
        return orders;
    }

    public List<Book> getBooks(){
        return books;
    }

    public List<PlacedOrder> findByClient(String client){
        ArrayList<PlacedOrder> clientOrder = new ArrayList<>();
        for(PlacedOrder placedOrder: orders){
            if(placedOrder.getClient().equals(client)){
                clientOrder.add(placedOrder);
            }
        }
        return clientOrder;
    }

    public void addBook(Book book){
        books.add(book);
        if(!book.getFormat().equals(Format.EBOOK)){
            book.setQuantity(book.getQuantity()-1);
        }
    }

    public void removeBook(Book book){
        books.remove(book);
    }

    @Transactional
   // @Query(value = " insert into PLACED_ORDER(placed_order_id, client, value) VALUES (:placedOrder.getOrderId, :placedOrder.getClient, :placedOrder.Value )", name = "", nativeQuery = true)
    public PlacedOrder checkOut(String client, String discount){
        if(books.isEmpty()){
            throw new IllegalStateException("The shopping cart is empty!");
        }
        List<Book> cart = new ArrayList<>(books);
        PlacedOrder placedOrder = new PlacedOrder(++orderIdCounter, client, cart);
        Double tempPrice = placedOrder.getValue();
        if(discount.equals("true")){
            tempPrice = tempPrice/2;
        }

        placedOrder.setValue(tempPrice);
        orders.add(placedOrder);
        books.clear();
        entityManager.createNativeQuery("insert into PLACED_ORDER(placed_order_id, client, value) VALUES (?,?,?)")
                .setParameter(1, placedOrder.getPlacedOrder_id())
                .setParameter(2, placedOrder.getClient())
                .setParameter(3, placedOrder.getComputedValue())
                .executeUpdate();
        return placedOrder;
    }

    public PlacedOrder deleteById(Long id){
        for(PlacedOrder placedOrder: orders){
            if(Objects.equals(placedOrder.getPlacedOrder_id(), id)){
                orders.remove(placedOrder);
                return placedOrder;
            }
        }
        return null;
    }


    public PlacedOrder updateOrder(Long id, PlacedOrder placedOrder){
        orders.removeIf(order -> Objects.equals(order.getPlacedOrder_id(), id));
        placedOrder.setPlacedOrder_id(id);
        orders.add(placedOrder);
        return placedOrder;
    }

    public boolean existsById(Long id){
        for(PlacedOrder placedOrder: orders){
            if(Objects.equals(placedOrder.getPlacedOrder_id(), id)){
                return  true;
            }
        }
        return false;
    }

    public void deleteBooks(){
        for(Book b:books)
            if(!b.getFormat().equals(Format.EBOOK)){
                b.setQuantity(b.getQuantity()+1);
            }
        books.clear();
    }

}
