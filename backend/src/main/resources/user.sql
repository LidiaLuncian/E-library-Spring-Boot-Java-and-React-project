DROP TABLE admin_user;
DROP TABLE client_user;

CREATE TABLE admin_user
(
    user_id  BIGINT       NOT NULL,
    username VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    email    VARCHAR(255) NULL,
    address  VARCHAR(255) NULL,
    CONSTRAINT pk_adminuser PRIMARY KEY (user_id)
);
CREATE TABLE client_user
(
    user_id  BIGINT       NOT NULL,
    username VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    email    VARCHAR(255) NULL,
    address  VARCHAR(255) NULL,
    CONSTRAINT pk_clientuser PRIMARY KEY (user_id)
);

CREATE SEQUENCE user_sequence
    START WITH 3
    INCREMENT BY 1;

insert into admin_user values (1,  'raluq', '1234', '', '' );
insert into admin_user values (2,  'lidia', '1234', '', '' );