Create a node project.
Add express, nodemon add the needded scripts for starting (dev, start etc.)

Create new node project.
create node server `express`
create 2 *post* routes (app.post('contact-us')) (app.post('reminders'))
Create a public folder to hold your html files.
To the public folder add `index.html`, `contact.html`, `reminders.html` files.
in the `index,html` add 2 links, one to `contect.html`, and one for `reminders.html` (a href)
Serve those file ith app.use(static) //express.static

In the `contact.html` create 3 input (name, email phone)
Create a button (contact us)
On button click get the values from the inputs and send them to the server.
hiny $.post('contact-us') (fill the rest.)

in the `contact-us` route:
catch this data from the req.body
(hint, you need to use app.use() - app.use(express.urlencoded({ extended: true })))
wirte this data to the DB.

In the `reminders.html` create 1 input (reminder)
Create a button (reminde-me)
On button click get the value from the input and send it to the server.
hiny $.post('reminders') (fill the rest.)

in the `reminders` route:
catch this data from the req.body
(hint, you need to use app.use() - app.use(express.urlencoded({ extended: true })))
wirte this data to the DB.


Bonus:
(we want over it at the end of the lesson)
Create a middlewere that write down each incomming request to the server in a json file (each request as a json object)
Hint(app.use())

Good luck