package com.raluq.rest.webservice.restfulwebservices.users.repository;

import com.raluq.rest.webservice.restfulwebservices.users.Admin;
import com.raluq.rest.webservice.restfulwebservices.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminJpaRepository extends JpaRepository<Admin, Long> {

    List<Admin> findByUsername(String username);
}
