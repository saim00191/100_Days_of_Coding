const traditionalFuncVSArrowFunc = {
    name: "Saim Raza",
    
    traditionalFunc : function () {
        console.log("traditional Function :" , this.name); // Saim Raza
    },
    arrowFunc : () => {
        console.log("Arrow Function :" , this.name); // undefind
    }
        
}

traditionalFuncVSArrowFunc.traditionalFunc()
traditionalFuncVSArrowFunc.arrowFunc()