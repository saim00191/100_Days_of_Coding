function make_Sandwich(sandwich) {
    console.log('\n \n Making Your Sandwich with:');
    for (var _i = 0, sandwich_1 = sandwich; _i < sandwich_1.length; _i++) {
        var Items = sandwich_1[_i];
        console.log("-" + Items);
    }
    console.log('Enjoy your Sandwich!!');
}
make_Sandwich(["Cheese", "Bread", "Tomato slices"]);
make_Sandwich(["Ham", "Cheese"]);
make_Sandwich(["Mustard", "mayonnaise "]);
