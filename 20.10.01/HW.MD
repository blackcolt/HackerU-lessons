Create a new node js project called (eged)
Create a server (with http server nofe js)
Create another file called (bus-time.js) (in the same project)
Create a json file with an array of objects
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
in the bus-time.js create a function called `getClosetTime` thats get a kev number and a time, and return the kav of the closet time to it.
- return it as a JSON object.
- In the server js, when the uers goes to /busses-times read the bus time and the kav from the query param, if one of them is not exsist - throw an error.
- in the index.js import **only** the `getClosetTime` from the bus-time.js file
 -return the answer from the getClosetTime with the right status code to the user as a JSON.
 - If there is no kav like that return 404.
 - If there is an answer from the `getClosetTime` return 200.
 


