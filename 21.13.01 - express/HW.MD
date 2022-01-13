Create new project called `the-big-library`
Create a node project.
Add express + nodemon depencency (to the right place)
Create books.json file with an array of books 
example: [
    {
        id: 1,
        name: "the ring",
        publish_date: "2011-12-10"

    },
    {
        id: 2,
        name: "the ring tin tin",
        publish_date: "2004-8-10"
    },
    {
        id:3,
        name: "im don't like books",
        publish_date: "2020-1-10"
    },
    {
        id: 3,
        name: "the ring",
        publish_date: "2021-10-10"
    }
]

Create an index.js file.
Create a express app inside it.
Please create a route '/' on this route return an html string <h1>Wellcone to the library</h1>
Create a route called /books and return the content of the books file.
If in the /books file there is a url param id - return the spefice book with this id (http://localhost/books?id=1 returns the book with the id 1).
If in the /books file there is a url param name - return the spefice book with this name (http://localhost/books?name=the ring returns the book with the name the ring).

Add a post route /books that takes all the books param (name date and publish_date and add another book to the json *file*)
Please validate that all inputs are in the request, if an input not there - please send an error to the user.
create an id for the book (take the last id and increament by one)

bonus:
Create a db called `the-big-library`
Add some books to it.
All the logic above insted of getting it from the file get it from the DB.
same for the post.

Good luck.



