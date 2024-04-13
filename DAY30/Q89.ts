function RoundDecimals(num:number) :number{
    return Number(num.toFixed(2))
}
console.log(RoundDecimals(3.14159)); //3.14