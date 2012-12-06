class Base {
   constructor(attrs) {
     //...some thing initial
     console.log("Base Constructor!");
     this.attrs = attrs;
     this.init();
    }
    baseMethod() {
        //..
      console.log("baseMethod!");
      console.log(this,attrs);
    }
    init() {
        console.log("Base init!");
    }
}

class  Derive extends Base {
   constructor(attrs) {
       super(attrs);
       console.log("Derive Constructor!");
       this.init();
    }
    init() {
       console.log("Derive init!");
    }
    deriveMethod() {
        this.baseMethod();
        console.log("deriveMethod!");
     }
}

