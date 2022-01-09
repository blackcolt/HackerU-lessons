Please create a new node project.
Create a json file (called users.json) (put it in folder called resources)

Fill the file with random users (arry of json objects (something like 15))
Example = 
[
    {
        user_name: "idan",
        password: "1234",
        phone: "0526651266",
        email: idanmagled@gmail.com,
        user_data: {
            age: 25,
            is_admn: false
        }
    },
    {
        age: 25,
        user_name: "elad",
        password: "5050",
        email: eladtheman@gmail.com,
        phone: "0526657766",
        user_date: {
            age: 25,
            is_admin: true
        }
    }
]

plase read the json file usin laybary you chose.
please use 3 methods for reading.
async awit.
callback.
promiss.
(you can use 3 files or on the same file)

insert the JSON array to a variable in loop over the array.
use lodash to get the age of the user, if there is no age define in the object give it a defult of 18 (age)
if the age is more then 21, add to the user propery - canDrink=true, if not - false

please change the password of the user to becrypt password
https://www.npmjs.com/package/bcrypt
(take the user password and bcrypt it using this^)

Don't forget to install dependencies.

Add an ID to each user using
https://www.npmjs.com/package/uuid

If the user don't have a valid email please change is email to - "notvalid@gmail.com"

if the user is an admin add "Admin" to is name.

Plase write all the data to another JSON file called user-parsed.json (in the resources also) (the data after the changes)

using the mongodb insert the users to the node-db we created and the last HW
https://www.npmjs.com/package/mongodb
(try to take the the mongo user from an env variable)


Don't forget to start you mongod

Bunos:
Plese create a script thats delete the user-parsed.json file

Good luck.
