
const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("First Promise Resolved");
    resolve(10);
  }, 1000);
});

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Second Promise Resolved");
    resolve(20);
  }, 2000);
});

const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Third Promise Resolved");
    resolve("Saim");
  }, 3000);
});

Promise.all([Promise1, Promise2, Promise3]).then((result) => {
    console.log(`Result : ${result}`);
}).catch((error) => {
    console.log(`Error : ${error}`);
})