"use strict";

function fn(/* this */) {
  console.log(this);
}

fn(/* undefined */);

let obj = {
  title: "I am obj's property",
  a: fn,
};
obj.a(/* obj */);

new fn(/* {prototype: fn.prototype} */);

function fn1(/* this */) {
  console.log("fn1", this); // obj1

  function fn2(/* this */) {
    console.log("fn2", this);
  }
  const af1 = () => {
    console.log("af1", this); // obj1
  };

  fn2(/* undefined */);
  af1();
}

const obj1 = {
  fn: fn1,
};
obj1.fn(/* obj1 */);
