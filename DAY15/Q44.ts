
function make_Sandwich(sandwich: string[]) {
    console.log('\n \n Making Your Sandwich with:');

    for (let Items of sandwich) {
        console.log("-" + Items);
    }
    console.log('Enjoy your Sandwich!!');
}

make_Sandwich(["Cheese", "Bread", "Tomato slices"])
make_Sandwich(["Ham" , "Cheese"])
make_Sandwich(["Mustard" , "mayonnaise "])