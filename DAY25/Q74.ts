function SwapValues() {
    let a = 5
    let b = 10

    console.log(`Before Swapping : 
a = ${a} 
b = ${b}`)

    let temp = a
    a = b

    b = temp

    console.log(`After Swapping : 
a = ${a}  
b = ${b}`)
}
SwapValues()