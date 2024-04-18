var _this = this;
var traditionalFuncVSArrowFunc = {
    name: "Saim Raza",
    traditionalFunc: function () {
        console.log("traditional Function :", this.name);
    },
    arrowFunc: function () {
        console.log("Arrow Function :", _this.name);
    }
};
traditionalFuncVSArrowFunc.traditionalFunc();
traditionalFuncVSArrowFunc.arrowFunc();
