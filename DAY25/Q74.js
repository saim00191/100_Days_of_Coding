function SwapValues() {
    var a = 5;
    var b = 10;
    console.log("Before Swapping : \na = ".concat(a, " \nb = ").concat(b));
    var temp = a;
    a = b;
    b = temp;
    console.log("After Swapping : \na = ".concat(a, "  \nb = ").concat(b));
}
SwapValues();
