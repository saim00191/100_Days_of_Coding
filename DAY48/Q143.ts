
const ConditionalPromise = new Promise((resolve, reject) => {
    let success = Math.floor(Math.random() * 6) > 3

    if (success) {
        return resolve("Success")
    } else {
        return reject(new Error("Failed"))
    }
})

ConditionalPromise.then((res) => console.log(res)).catch((err) => console.log(err))