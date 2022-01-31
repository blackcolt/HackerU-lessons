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

clearfication:
need to be in the index.js
app.get('/books') -> returns all books
app.get('/authors') -> returns all authors

app.get('/book/:bookId') -> returns book by id
app.get('/author/:authorId') -> returns author by id

app.post('/author') -> add an author.
app.post('/book/') -> add a book.

app.put('/book/:bookId') -> update book by id
app.put('/author/:authorId') -> update author by id

app.delete('/book/:bookId') -> delete book by id
app.delete('/author/:authorId') -> delete author by id

Add all CRUD options for book and author (two diffrents html files
with select that enable the user to crete new read update and delete)

Bonus:
When getting the author get all the books that he wrote and display them in a table (use mongoose populate)
When getting a book add the author name.
Good luck.
