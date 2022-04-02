String.prototype.idan = function () {
  return this + " idan";
};

String.prototype.multiply = function (multiplyer) {
  let buffer = "";
  for (let i = 0; i < multiplyer; i++) {
    buffer += this + " ";
  }
  return buffer;
};

"idan".multiply(4);

//create a function on proto of string.

// get a param to this function.

// loop untill the param, and stack the word.
// return the word

//need to multi the numiber by itself

//1. create a function on number
//2. multiply with itself.

Number.prototype.multi = function () {
  return this * this;
};
let num = 4;
console.log(num.multi());

const obj = {
  name: "idan",
};
// const numb = 4
// num.sqrt()

// const obj1 = {}

// obj1.action()
// action(obj1)

// "moshe".writeWithNumber(3);
// String.prototype.writeWithNumber = function (times) {
//   //moshe == this
//   //3 == times
// };

Array.prototype.isMoreThenFour = function () {
  if (this.length > 4) {
    console.log("more then 4");
  } else {
    console.log("less then 4");
  }
};

"blabla".isMoreThenFour();

String.prototype.isBiggerThenFive = function () {
  return this.length > 5;
};

String.prototype.isBiggerThen5 = function () {
  if (this.length > 5) return this + "is bigger than five";
};

String.prototype.isBiggerThenFive = function () {
  // return if(this>5) ?  true : false
};

String.prototype.moreThenFive = function () {
  if (this < 5) {
    return false;
  } else {
    return true;
  }
};

String.prototype.stringify = function (string) {
  if (this > 5) {
    console.log("is bigger 5");
  } else {
    console.log("is not bigger 5");
  }
  return this + " " + string;
};

String.prototype.isBiggerThen5 = function () {
  return this.length > 5 ? true : false;
};
