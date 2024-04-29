function executeCallBck(callBack: (arg1: number, arg2: number) => void) {
    const arg1 = 10
    const arg2 = 20

    callBack(arg1 , arg2)
}

function sum(a: number, b: number) {
    console.log(a * b)
}

executeCallBck(sum)