
const Promise1 = new Promise((resolve, reject) => {
  
    let RandomNumber = Math.random() > 0.5

    if (RandomNumber) {
        resolve('Success')
    }else{
        reject(new Error('Error Fetching Data'))
    }
})

Promise1.then((data) => { console.log(data) }).catch((err) => {console.log(err)})