Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project THE-BIG-HOTEL.

create node server `express`

start the serever **ONLY** if the DB connected.

Install prettier on your project.
Add the needed code in the package json (you can check prettier docs)

models:

guest,
name:string, gender:string, dateOfBirth:date, isVip: bool,
reservation
room_id (assoc with room), capacity:number
room
isVip: bool, haveBath:Bool, roomNumber: Number

create resources for all this modes (resource its all of the CRUD actions (get, get All, update, delete etc..))
create routes file for each model and put all of the logic there.

Add route that returns all the rooms with bath.
Add route for getting all the rooms that are vip or have bath.
Add all rooms that can have more then 3 guests in them (capacity)
get all female guests

Remember, model, controller, route.

add an html file for each model that handle the logic.

Bonus:
Get all guests and, check if they are over 21 and add canDrink=true as a property to the object.
Convert your project to TS project(@types/express @types/mognose etc..)
add a controller with the folowing funcitons:
create a nice 404 html page, if the user gets to any route that you don't have display it to him (app.get('*'))
add a route, called showMeAll, in this route use axios to call your other route (/guests)
 (its just to prectice axios) wait for an anwer and return it to the user.
 
Enjoy.
