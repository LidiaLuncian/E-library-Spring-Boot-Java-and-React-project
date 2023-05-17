package com.raluq.rest.webservice.restfulwebservices.users;

import org.hibernate.annotations.Polymorphism;
import org.hibernate.annotations.PolymorphismType;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.persistence.Entity;

@Entity(name = "ClientUser")
@PreAuthorize("hasAuthority('ROLE_USER')")
@Polymorphism(type = PolymorphismType.EXPLICIT)
public class Client extends User{


    public Client() {
    }

    public Client(Long user_id, String username, String password, String email, String address) {
        super(user_id, username, password, email, address);
    }


    @Override
    public String toString() {
        return super.toString() +  "Client";
    }
}
