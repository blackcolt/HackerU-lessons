let name = "idan";

// function updateName() {
//   name = "ortal";
// }
// let currentName = name;
// setInterval(() => {
//   if (currentName != name) {
//     currentName == name;
//     console.log("name canged");
//   }
// }, 2000);

function updateName(newName, callbackes = []) {
  for (let index = 0; index < callbackes.length; index++) {
    callbackes[i](newName);
  }
  name = newName;
}

next, error, complete;

function observable(oneFunction) {
  //we will get all events in one function.
}

let observe = {
  next: function (res) {
    console.log("data" + res);
  },
  error: (err) => console.log("error:" + err),
  complete: () => console.log("Observer got a complete notification"),
};

function observableObj() {}

function moshe(next, error, complete) {
  filedata = readFile();
  if (filedata === "") {
    error("");
  } else if (filedata.length === 20) {
    complete();
  } else {
    next();
  }
}
