function generateRandomHexColor() {
    var color = "#" + Math.floor(Math.random() * 65535).toString(16).padStart(6, "0");
    return color;
}
console.log(generateRandomHexColor());
