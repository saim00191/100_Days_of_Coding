let numberList = [1,2,3,4,5,6,7,8,9];

let Ending : string;

for(let Number of numberList){
    if(Number === 1){
        Ending = "st"
    }else if(Number === 2){
        Ending = "nd"
    }else if(Number === 3){
        Ending = "rd"
    }else {
        Ending = "th"
    }
console.log(Number + Ending)
}



