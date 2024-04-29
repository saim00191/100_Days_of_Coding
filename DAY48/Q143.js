var ConditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.floor(Math.random() * 6) > 3;
    if (success) {
        return resolve("Success");
    }
    else {
        return reject(new Error("Failed"));
    }
});
ConditionalPromise.then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
