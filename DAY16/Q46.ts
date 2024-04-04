
let Laptops = {
    maker: "HP",
    model: "Core i7",
    Generation: "12",
    year: "2023",
    
    describe: function () {
        console.log(`This Laptop is a ${this.year} ${this.maker} and Model is ${this.model} and has ${this.Generation} Generation.` );
    }
}

Laptops.describe()