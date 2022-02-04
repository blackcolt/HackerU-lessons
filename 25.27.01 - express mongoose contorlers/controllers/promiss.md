syntax of creating a promiss

new Promiss ->
when a good thing happebs - will call resolve.
bad thing -> will call reject:
example:

````new Promiss((resolve, reject) =>{
    if(goodThing){
        resolve(goodThing)
    } else {
        reject(badThing)
    }
})```
````
