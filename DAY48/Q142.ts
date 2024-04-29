
const helloWorldPromise = new Promise((resolve) => {

    console.log("Promise Start");

    setTimeout(() => {
        resolve("Hello World")
    },2000)
})

helloWorldPromise.then((message) => console.log(message);)