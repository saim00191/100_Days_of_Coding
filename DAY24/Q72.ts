{
    let blockLet = "Visible Inside The Block";
    const Blockconst = "Also visible only inside the block"

    console.log(blockLet);
    console.log(Blockconst);
}
try {
    console.log(blockLet);
} catch (error) {
    console.log("BlockLet is not accessible outside the block");
}
try {
    console.log(Blockconst);
} catch (error) {
    console.log("Blockconst is not accessible outside the block");
}



