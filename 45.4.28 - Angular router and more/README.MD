router - redircet in the route object.
tourerLinkActive=className
wrapp the router-outlet with wrapper (header footer etc.)

<html>
<router-outlet>
</html>
yield (make the function stop on each yield)
remember the - *
function *setNextId(){
    let id = 0
    while(true){
        id += 1
        yield id
    }
}

rxjs

https://rxjs.dev/

let obs = new rxjs.Observable((sub)=>{
let rand = Math.random()
let counter = 0
setInterval(()=>{
sub.next(++counter + ' ' + rand)
}, 2000)
})

let subscribe = obs.subscribe()

fucntion doSomething(data){
console.log(data)
}
