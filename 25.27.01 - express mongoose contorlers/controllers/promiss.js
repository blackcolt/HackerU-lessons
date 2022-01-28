// const thisWillTake2sec = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("this happend");
//     }, 2000);
//   });
// };

// const thisWillTake5sec = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       thisWillTake2sec.then(() => {
//         resolve();
//       });
//     }, 3000);
//   });
//   // thisWillTake2sec().then()
// };

// // thisWillTake5sec().then((res) => console.log(res));
// // .then(() => {
// //   console.log("this happend");
// // });

// controller-> returns->functions
// functions[0]->new Promiss

// getAllUsers->returns promiss
// getAllUsers->users users.find()->returns promiss
