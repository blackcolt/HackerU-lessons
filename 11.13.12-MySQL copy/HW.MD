- Create an SQL file that does the folowing:
CREATE DATABSAE NAMED `the-amazing-shop`

Add at least 10 products.
Add at least 5 clients.
Add at least 10 orders (with 1-3 order products )

Add 4 tables:
    `clients`
    `orders`
    `order_details`
    `products` 

 - products: (
    id,
    name,
    weight
    price
    description,
 )

 -clients: (
     id, 
     first_name,
     last_name,
     email,
     phone,
     adress,
 )

 - orders: (
    id,
    date,
    price,
    isGift
    client_id,
    isSuplied,
 )

- order_products: (
    id,
    order_id
    product_id
)

please define the fields with the right datatyps
please create the connections between this tables.
TRY to join the order clients table with the order table (you have a refrence in the join.SQL file).

Good luck.