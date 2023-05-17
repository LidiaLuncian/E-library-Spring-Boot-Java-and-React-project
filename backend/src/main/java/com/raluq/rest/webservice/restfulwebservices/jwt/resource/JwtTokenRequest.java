package com.raluq.rest.webservice.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

   //token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MTQxNDU0MCwiaWF0IjoxNjQwODA5NzQwfQ.eNzMtaIQ48WcyjnDaey8pEA-a1n9EJWYk45MVYMfnSNaWh1RpdLcTfJrZ-p3Z65pnZPgfx4S1ZtWjDwgY1EVZg"


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
