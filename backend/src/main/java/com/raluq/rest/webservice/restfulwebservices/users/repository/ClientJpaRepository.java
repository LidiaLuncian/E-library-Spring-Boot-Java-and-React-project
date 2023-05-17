package com.raluq.rest.webservice.restfulwebservices.users.repository;

import com.raluq.rest.webservice.restfulwebservices.users.Client;
import com.raluq.rest.webservice.restfulwebservices.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientJpaRepository extends JpaRepository<Client, Long> {

    @Query("select c from ClientUser c where c.username = :username")
    List<Client> findByUsername(String username);

    List<Client> findByEmail(String email);

}
