Create a new node js project called (eged)
create a index\app(.js)
in the above file, Create a server (with http server).
Create another file called (bus-time.js) (in the same project)
Create a json file with an array of objects (call is but-times.json)
example:
[
    {
        kav: 142,
        time: 10:30
    },
    {
        kav: 148,
        time: 10:30
    },
    {
        kav: 148,
        time: 10:30
    },
    {
        kav: 10,
        time: 10:30
    }
    
]
**Fill is with a lot of data**.
in the bus-time.js create a function called `getClosetTime` thats get a kev number and a time, and return the kav of the closet time to it (search it in JSON file).
- return it as a JSON object.
- In the server js, when the uers goes to /busses-times route (req.url) read the bus time and the kav from the query param, if one of them is not exsist - throw an error.
- in the index.js import **only** the `getClosetTime` from the bus-time.js file
 -return the answer from the getClosetTime with the right status code to the user as a JSON.
 - If there is no kav like that return 404.
 - If there is an answer from the `getClosetTime` return 200.
 

**For the next lesson please create mongo DB called `reminders` and inside add 4 reminders**