var myObj = {
    name: "Saim",
    getName: function () {
        var _this = this;
        console.log(this.name);
        var innerGetName = function () {
            console.log(_this.name);
        };
        innerGetName();
    }
};
myObj.getName();
