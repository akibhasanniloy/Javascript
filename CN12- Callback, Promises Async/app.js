function asyncfunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some datails.");
      resolve("success");
    }, 2000);
  });
}

function asyncfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("it will be reject");
      reject("error");
    }, 3000);
  });
}

console.log("fetching function 1");
asyncfunc().then((res) => {
  console.log(res);
  console.log("fetching function 2");
  asyncfunc2().then((err) => {
    console.log(err);
  });
});

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise.");
//   resolve(123);
//   // reject(1234);
// });

// function getdata(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success.");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//       getdata(4);
//     });
//   });
// });
