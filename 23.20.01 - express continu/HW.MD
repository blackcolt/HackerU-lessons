Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project.
create node server `express`

start the serever **ONLY** if the DB connected.

with mongoose create 2 models - student, grades
Student needs to have name:string, grade:number, age:number 
all of those fields are required (mongoose validation)
Grade needs to have student_id: string, grade: number

Add route for adding a new students to the DB (app.get)
Add route to get student by name.
Add route for getting all studetns.
Add route to add grade for a user 
Add route to delete stduend by name
Add route to delete stduend by id.

Use all of this routes in the index.html page.

use the get all student with `fetch`
use the get student by name with `$.get`
use the get student by name with `$.get`
use the get student by name with `fetch`
Add route to delete stduend by name `fetch`
Add route to delete stduend by id: `$.ajax -` (you have an explaination how to do it here)

https://stackoverflow.com/questions/2153917/how-to-send-a-put-delete-request-in-jquery/2153931

Add a route that show our top grade. `fetch`

To the public folder add `index.html`,

Add a readme.md file to your project and explain to the next developer all the commands and depencies you installed and what it does.
Add to it each response from the preview from the network tab.

Bonus: (this is the same bonus from before, none of you did it so im adding it again :) )
Create a middlewere that write down each incomming request to the server in a json file (each request as a json object)
Hint(app.use())

Good luck