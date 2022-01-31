Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project **Amazot**.

create node server `express`

start the serever **ONLY** if the DB connected.

with mongoose create 2 models - book, author

book fields:
name, publish date, author->ref for autor, isInStock

author fields:
name, adress, phone, isAlive, birthday

Add all CRUD options for book and author (two diffrents html files
with select that enable the user to crete new read update and delete)

Bonus:
When getting the author get all the books that he wrote and display them in a table (use mongoose populate)
When getting a book add the author name.
Good luck.
