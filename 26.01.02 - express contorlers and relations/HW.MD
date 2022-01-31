Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project **ten-wolt**.

create node server `express`

start the serever **ONLY** if the DB connected.

with mongoose create 3 models - client, order, store

client fields:
name, adress, isVip, phone

store fields:
name, adress, phone

order fields:
client(ref), store(ref), timestemp, store (check mongoose timestemps)

Add a route for adding client, store, order to the DB
Add a route for getting all clients, stores, orders to the DB
Add a route for updating client, store, order by id (/route/:id)

Add an clients.html file that will handle all clients logic in the
Add an stores.html file that will handle all stores logic in the
Add an orders.html file that will handle all orders logic in the

Add UI for adding a client ($.post)
Add UI for adding store (featch)
Add UI for adding an order (add the client id and the store id mannully for now in a text input
we will learn how to do it progremtelcly later).

Add UI for getting user by id ($.get)
Add UI for getting user by name ($.get (?name=name))
Add UI for getting all users.

Add UI for getting store by id (fetch)
Add UI for getting store by name (fetch)

With your teammate (in live share), add another route (lets call it helth-check) thats returns json
{"message": "im good!"} commit it, and add the commit to the repo.

Bonus:
Add an add an ajax request from the orders.html thats get all the stores and make a select tag from tham
(Get all data, loop on it, and append it to an <select> as an option)
https://stackoverflow.com/a/171007/1928647

Good luck
