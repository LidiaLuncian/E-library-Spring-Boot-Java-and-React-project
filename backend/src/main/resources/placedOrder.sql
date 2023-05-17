DROP TABLE  placed_order;

CREATE TABLE placed_order
(
    placed_order_id BIGINT       NOT NULL,
    client          VARCHAR(255) NULL,
    value           DOUBLE       NULL,
    CONSTRAINT pk_placedorder PRIMARY KEY (placed_order_id)
);
