var Laptops = {
    maker: "HP",
    model: "Core i7",
    Generation: "12",
    year: "2023",
    describe: function () {
        console.log("This Laptop is a ".concat(this.year, " ").concat(this.maker, " and Model is ").concat(this.model, " and has ").concat(this.Generation, " Generation."));
    }
};
Laptops.describe();
