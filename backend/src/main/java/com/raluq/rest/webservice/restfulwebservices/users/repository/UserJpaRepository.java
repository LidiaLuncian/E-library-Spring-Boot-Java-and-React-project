package com.raluq.rest.webservice.restfulwebservices.users.repository;

import com.raluq.rest.webservice.restfulwebservices.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface UserJpaRepository extends JpaRepository<Class<?>, Long> {


}
