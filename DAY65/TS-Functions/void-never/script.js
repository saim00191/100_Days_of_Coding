/****************
 * VOID & NEVER *
 ****************/
/****************
    * VOID  *
 ****************/
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
/***************
 * NEVER TYPE *
 ***************/
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
