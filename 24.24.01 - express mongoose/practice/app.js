const user = {
    "name": "idan",
    "f_name": "magled",
    "email": "idanmagled@gmail.com"
}

const anotherUser = {
    "name": null,
    "f_name": "zada",
    "email": "matanzada@gmail.com",
}

// const name = anotherUser.name;
// const f_name = anotherUser.f_name;
// const email = anotherUser.email || "examplemail.com"

const { name = "idan", f_name, email = "examplemail.com"} = anotherUser
console.log(name);

const thisIsTrue 
if (thisIsTrue){
console.log("trueeee")
} 
else{
    console.log("not trueee")
}

thisIsTrue ? console.log("trueeee"): console.log("not trueee")

console.log(thisIsTrue ? "trueeee": "not trueee")