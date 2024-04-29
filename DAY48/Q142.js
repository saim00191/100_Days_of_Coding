var helloWorldPromise = new Promise(function (resolve) {
    console.log("Promise Start");
    setTimeout(function () {
        resolve("Hello World");
    }, 2000);
});
helloWorldPromise.then(function (message) { return console.log(message); });
