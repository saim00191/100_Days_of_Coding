
let placetovist = ["Zimbawae","India" ,"Pakistan","America","Dubai","Sri Lanka","New Zealand"]

// Print your array in its original order.
console.log("Original order : "+placetovist)

// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order : "+ [...placetovist].sort())



// Show that your array is still in its original order by printing it.


console.log("Original order : "+placetovist)


// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order : "+[...placetovist].sort().reverse())

// Show that your array is still in its original order by printing it again.
console.log("Original order :"+placetovist)

// Reverse the order of your list again. Print the list to show it’s back to its original order.
placetovist.reverse()
console.log("Reversed order : "+placetovist)

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

placetovist.reverse()
console.log("Original order :"+placetovist)

console.log("Sorted in reverse alphabetical order : "+ placetovist.sort())

