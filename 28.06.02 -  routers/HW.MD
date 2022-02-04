Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project **block-monster**.

create node server `express`

start the serever **ONLY** if the DB connected.

Install prettier on your project.
Add the needed code in the package json (you can check prettier docs)

Create one model (called movie)
movie have this fields:
name, publish date, cast (array of string), origin countery (string)

add a controller with the foloowing funcitons:

- Add a movie.
- Update a movie by id.
- Get the lates movie (by publish date.)
- Get all dated from the countery (the currently with be with a url param).
- Add a route thats gets a movie from the DB (with an ID)
  write the movie to a JSON file and then download the json you created.

Add routes for all of those controller function.
Add HTML functionality.

Bonus:
using axiuos get a movie by name from imdb API.
https://imdb-api.com/api (generate a key)

Enjoy.
