var Arr = [80, "Saim", "Talha", 56, "Faiz", 90, 22, "Qasim"];
//@ts-ignore
var Answer = Arr.filter(function (str) { return typeof str === "string"; });
console.log(Answer);
