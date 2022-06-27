const Store = require("../models/store");

// const getSllStores = () => {
//   return new Promise((resolve, reject) => {
//     Store.find()
//       .then((stores) => resolve(stores))
//       .catch((err) => {});
//   });
// };

const testIfSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isGood = false;
      if (isGood) {
        resolve(isGood);
      }
      reject(isGood);
    }, 5000);
  });
};

testIfSomething()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });



  const fun = ()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        
      }, 5000 )
    })
  }