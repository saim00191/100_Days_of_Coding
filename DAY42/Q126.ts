const myObj = {
    name : "Saim",
  
    getName : function () {
      console.log(this.name);
  
      const innerGetName = () => {
        console.log(this.name)
      }
      innerGetName()
    }
  }
  myObj.getName()