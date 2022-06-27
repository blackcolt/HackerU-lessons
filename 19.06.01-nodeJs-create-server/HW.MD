 - Please create a new node JS project.

 - Create 3 .html files (index, about, contect-us)
 - Please use the http packge to create a server.
 - In the incomming request check the url, if the url is one of the folowing files name (about|contect-us) send the user the right file (using ).
 - If the user nevigate to the root of ths site (/) send the user the index.
Copy the users.json from our previuos HW file to the project
 - in the route /api/users read the users.json file (that you coppied) and send it to the user (using pip)
 Please add json header to the response object (check google for the right header)

 - Please create a route greeting-user (if req.url === 'greeting-user') 
 in this route read the url query params name and send a greeting with the user name.
 For example: localhost:90/greeting-user?name=idan sholde return "hi idan whats up?!"


 bonus:
  - if the user get to /redirect-me redirect him to the home page.
  - print the method type (GET\POST\PUT\DELETE\UPDATE)

  ENJOY!
