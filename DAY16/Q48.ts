
let price1 = [4000, 2000, 6000, 1200]

let price2 = [1500, 9000, 3700, 2000]

let CombinePrice = [...price1, ...price2].sort((a, b) => { return a - b });

console.log(CombinePrice);