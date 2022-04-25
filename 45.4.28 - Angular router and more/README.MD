wrapp the router-outlet with wrapper (header footer etc.)

<html>
<router-outlet>
</html>

router - redircet in the route object.
tourerLinkActive=className

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
subscribe with 1 pram (subscripe to all events)
with 3 parms (sub to (next, sucess error))

sub.next
sub.complete
sub.error
sub.subscribe(()=>console.log('next'), ()=>console.log('error'), ()=>console.log('complete'))

when it end?
complete?
error?
next?

2 subs? he will get the same random?

rxjs.fromEvent('element', 'click')
shareReplay (start from the point that it is)
let ob = new rxjs.Observable((sub)=>{
let counter = 0;

}).pipe(rxjs.operators.shareReplay)

http in angular
httpClientMudol
