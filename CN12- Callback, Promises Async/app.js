// function asyncfunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some datails.");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncfunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("it will be reject");
//       reject("error");
//     }, 3000);
//   });
// }

// console.log("fetching function 1");
// asyncfunc().then((res) => {
//   console.log(res);
//   console.log("fetching function 2");
//   asyncfunc2().then((err) => {
//     console.log(err);
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise.");
//   resolve(123);
//   // reject(1234);
// });

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

function getdata(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success.");
    }, 2000);
  });
}

//async await
async function getAllData() {
  await getdata(1);
  await getdata(2);
  await getdata(3);
}

//promise chain
// getdata(1)
//   .then((res) => {
//     return getdata(2);
//   })
//   .then((res) => {
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//call back hell
// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//       getdata(4);
//     });
//   });
// });
