var Promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First Promise Resolved");
        resolve(10);
    }, 1000);
});
var Promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Second Promise Resolved");
        resolve(20);
    }, 2000);
});
var Promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Third Promise Resolved");
        resolve("Saim");
    }, 3000);
});
Promise.all([Promise1, Promise2, Promise3]).then(function (result) {
    console.log("Result : ".concat(result));
}).catch(function (error) {
    console.log("Error : ".concat(error));
});
