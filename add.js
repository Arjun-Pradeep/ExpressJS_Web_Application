const mymodule=require('./add_module')
var x=1000000;
var y=20000000000345364;
var z=mymodule.addnum(x,y);
var w=mymodule.subnum(x,y);
var a=mymodule.mulnum(x,y);
var b=mymodule.divnum(x,y);

console.log(z);
console.log(w);
console.log(a);
console.log(b);