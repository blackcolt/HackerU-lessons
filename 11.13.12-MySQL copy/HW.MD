- Create an SQL file that does the folowing:
CREATE DATABSAE NAMED `the-amazing-shop`

Add at least 10 products.
Add at least 5 clients.
Add at least 10 orders (with 1-3 order products )

Add 4 tables:
    `clients`
    `orders`
    `order_products`
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
     VIP,
 )

 - orders: (
    id,
    date,
    price,
    is_gift
    client_id,
    is_suplied,
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

clients [idan, yarin, matan, sonia]
orders:
    client_id->client.id
 [order1, order2]
products : [bikes, phones]
order_products: 
id
products_id->product.id
order_id->order.id



orders:
id: 1

order_products:[
    id:1
    order_id:1
    product_id: 5,
   
    id:2
    order_id:1
    product_id: 3
]