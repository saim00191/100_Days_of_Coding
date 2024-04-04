var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placetovist = ["Zimbawae", "India", "Pakistan", "America", "Dubai", "Sri Lanka", "New Zealand"];
// Print your array in its original order.
console.log("Original order : " + placetovist);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order : " + __spreadArray([], placetovist, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Original order : " + placetovist);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order : " + __spreadArray([], placetovist, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order :" + placetovist);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
placetovist.reverse();
console.log("Reversed order : " + placetovist);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placetovist.reverse();
console.log("Original order :" + placetovist);
console.log("Sorted in reverse alphabetical order : " + placetovist.sort());
