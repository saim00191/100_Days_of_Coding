var Promise1 = new Promise(function (resolve, reject) {
    var RandomNumber = Math.random() > 0.5;
    if (RandomNumber) {
        resolve('Success');
    }
    else {
        reject(new Error('Error Fetching Data'));
    }
});
Promise1.then(function (data) { console.log(data); }).catch(function (err) { console.log(err); });
