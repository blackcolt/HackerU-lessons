Solve HW.
Debug session.

express basic 
app.get()
app.post()
app.delete()
app.patch()

res.send
res.json

app.use(express.json());
process.count //can save global things.

* Create an express server using your new favorite moudle :) 
Using app.get add an users route `/reminders` 
In this route return a list of reminders from the DB we created in the homeworks in the previous lesson 
(if you didn't create one, create one now)
Using app.post in the same route `/reminders` (read the body of the request) (using req.body) and insert it to the DB.

serve static files.
app.use(express.static('public'))

lets create client that talks to the server? 

the `next` param in a request.
