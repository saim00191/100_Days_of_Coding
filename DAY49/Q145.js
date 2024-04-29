function executeCallBck(callBack) {
    var arg1 = 10;
    var arg2 = 20;
    callBack(arg1, arg2);
}
function sum(a, b) {
    console.log(a * b);
}
executeCallBck(sum);
