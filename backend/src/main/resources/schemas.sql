DROP TABLE book;

CREATE TABLE book
(
    id         BIGINT       NOT NULL,
    title      VARCHAR(255) NULL,
    author     VARCHAR(255) NULL,
    genre      VARCHAR(255) NULL,
    format     INT          NULL,
    quantity   INT          NULL,
    price      DOUBLE       NULL,
    image_path VARCHAR(255) NULL,
    CONSTRAINT pk_book PRIMARY KEY (id)
);

drop sequence book_sequence;
CREATE SEQUENCE book_sequence
    START WITH 20
    INCREMENT BY 1;

insert into book
values ( 1, 'Lord of the rings', 'J. R. R. Tolkien', 'Fantasy', 0, 50, 20.2, 'https://images-na.ssl-images-amazon.com/images/I/71v4v2E4oJL.jpg');
insert into book
values ( 2, 'Lord of the rings', 'J. R. R. Tolkien', 'Fantasy', 1, 45, 20.2, 'https://images-na.ssl-images-amazon.com/images/I/71v4v2E4oJL.jpg');
insert into book
values ( 3, 'Lord of the rings', 'J. R. R. Tolkien', 'Fantasy', 2, 40, 20.2, 'https://images-na.ssl-images-amazon.com/images/I/71v4v2E4oJL.jpg');
insert into book
values ( 4, 'Good omens', 'Terry Pratcher & Neil Gaiman','Fiction',  0, 90, 15.0, 'https://images-na.ssl-images-amazon.com/images/I/51FuLRqRQwL._SX307_BO1,204,203,200_.jpg' );

insert into book
values ( 5, 'Good omens', 'Terry Pratcher & Neil Gaiman','Fiction',  1, 90, 15.0, 'https://images-na.ssl-images-amazon.com/images/I/51FuLRqRQwL._SX307_BO1,204,203,200_.jpg' );

insert into book
values ( 6, 'Good omens', 'Terry Pratcher & Neil Gaiman','Fiction',  2, 90, 15.0, 'https://images-na.ssl-images-amazon.com/images/I/51FuLRqRQwL._SX307_BO1,204,203,200_.jpg' );

insert into book
values ( 7, 'Harry Potter and the Chamber of secrets','J. K. Rowling','Action',   0, 171, 20, 'https://images-na.ssl-images-amazon.com/images/I/51mFoFmu0EL._SX335_BO1,204,203,200_.jpg'  );

insert into book
values ( 8, 'Harry Potter and the Chamber of secrets',  'J. K. Rowling', 'Action',  2, 2, 20, 'https://images-na.ssl-images-amazon.com/images/I/51mFoFmu0EL._SX335_BO1,204,203,200_.jpg'  );

insert into book
values ( 9, 'To kill a mockingbird', 'Harper Lee', 'Classics',  1, 30, 12.3 , 'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg');

insert into book
values ( 10, 'To kill a mockingbird', 'Harper Lee', 'Classics',  1, 30, 12.3 , 'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg');
