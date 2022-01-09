const fs = require('fs-extra')
const mosheTheValidator = require('validator');
const _ = require('lodash')
const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const obj =  { 
  name: { first_name: "idan", last_name: "magled" },
  email: "idanmagledgmail.com", age: 35 
} 

async function main(obj) {
    client.connect();
    console.log('Connected successfully to server');
    //use node-db
    const db = client.db('node-db');
    //db.createCollection('users')
    const collection = db.collection('users');
    //db.users
    return await collection.insertMany([obj]);
    // client.close();
    // client.db('node-db').collection('users').insertMany([obj])
  }

  (async function() {
    let x = await main(obj)
    console.log(x)
    client.close()
  })();

const user = process.env.db_pass
process.env
console.log(_.get(obj, 'name.last_name', 'bla bla'));
// obj.email = mosheTheValidator.isEmail(obj.email) ? obj.email : "Not A valid email"

if (!mosheTheValidator.isEmail(obj.email)){
    // throw "not a valid email";
    // obj.email = "not a valid email";
}

async function example () {
    // await fs.writeJson('results/awit_names.json', obj)
}

//
fs.writeJson('results/cb_names.json', obj, err => {
    if (err) return console.error(err)
    console.log('success!')
})

fs.writeJson('results/pr_names.json', obj)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

example();