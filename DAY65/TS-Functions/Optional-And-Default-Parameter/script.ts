/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

//Optional Paramtetres

function OptionalParamsExample(name : string , age? : number) {
    if (age !== undefined) {
        console.log(`Hello ${name} . your age is ${age}`);
    } else {
        console.log(`Hello ${name}`);
    }
}
OptionalParamsExample("Tom")

//Default Parametres

function DefaultParamsExample(name1 : string  , age1 : number = 20) {
    console.log(`Hello ${name1} your age is ${age1}`);
}

DefaultParamsExample("saim")
DefaultParamsExample("John" , 19)


