// console.log(this);
// function foo(){
//     console.log(this);
// }

// foo();


// var obj = {
//    name: "bla bla",
//    age: "123", 
//    getLastName: function () {
//      $.get('https://reqres.in/api/users?page=2',function(data){
//         debugger
//         console.log(this);
//      });
//    }
// }

// obj.getLastName()

console.log("ASDASDASD".replace("A","B"));

String.prototype.idanify = function (){
    debugger
    return this.replaceAll('a','idan');
}
// Number.prototype.

Object.prototype.snirify = function(what){
    console.log(this.name);
}

var x = {"name": "matan"}
var y = {"name": "yarin"}

x.snirify()
y.snirify()


console.log("asdasdasd".idanify());

function foo() {
    console.log(this);
}
debugger
foo()
foo().bind("name")
