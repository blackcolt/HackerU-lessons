function includes(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return true;
    }
  }
  return false;
}

String.prototype.toIdan = function (x) {
  return this + "- idan";
};

String.prototype.toIdan = function (x) {
  return this + "idan";
};

const fName = "blabla";
const t = fName.toIdan();
console.log(t);

//
// const nameWithIdan = fName.toIdan();

// console.log(fName);

if (!Array.prototype.includes) {
  Array.prototype.includes = (arr, number) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == number) return true;
    }
    return false;
  };
}

Array.prototype.biggerThen5 = function () {
  return this.length > 5;
};
[].biggerThen5();

// console.log([1, 4, 5, 6].includes(3));
// console.log(includes([1, 4, 5, 6], 1));

// arr.function
// function(arr)
