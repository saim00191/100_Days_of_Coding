function make_shirt2(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " and the message ").concat(message, " printed on it."));
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "I Love T-Shirts");
