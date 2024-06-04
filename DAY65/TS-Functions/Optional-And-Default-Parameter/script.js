/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/
//Optional Paramtetres
function OptionalParamsExample(name, age) {
    if (age !== undefined) {
        console.log("Hello ".concat(name, " . your age is ").concat(age));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
OptionalParamsExample("Tom");
//Default Parametres
function DefaultParamsExample(name1, age1) {
    if (age1 === void 0) { age1 = 20; }
    console.log("Hello ".concat(name1, " your age is ").concat(age1));
}
DefaultParamsExample("saim");
DefaultParamsExample("John ", 19);
