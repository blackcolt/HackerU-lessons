1 Create an npm project: (Not in the hacker U project please).
2 Plese create an js file (app.js\index.js your choice).
3 Please add (start script like we learnd)
4 Create a folder (*with the terminal*) inside you projects called "results"
5 Plese create another script (called your name that will run the project also)
6 Please add this depencencis:

* loadash - https://github.com/lodash/lodash
* validator - https://github.com/validatorjs/validator.js
* fs-extra - https://github.com/jprichardson/node-fs-extra
* mongo - https://github.com/mongodb/node-mongodb-native

Dont forget to install them.

Inside your js file add a function thats create a json file using fs-extra (What you installd from npm) with your name, age, adress, email:
this is the JSON:
{
    name: {
        first_name: "idan",
        last_name: "magled"
    }
    email: "idanmagled@gmail.com"
    age: 35
}
Use validator (What you install from npm) (inside the function) to validate the email.
if the email is not valid write "not a valid email instead"
Using loadsh (What you install from npm) print the last name from the object.
Run it with both commands (your name and start) from section 5.

Bonus: 
Create a new DB called node-db (use the mongo shell no need for node)
Using mongo package (What you install from npm) insert your details (from the json above to the DB)
Extra bonus - get the db_pass from env var (that we created in the previous lesson)



