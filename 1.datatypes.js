// premitive dataypes
var a=10
console.log(typeof a);//number
console.log(typeof 20);//number
console.log(typeof "html");//string
console.log(typeof false);//boolean
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof 10n);//bigint
var c=null;
console.log(c);//null(empty)



//non-premitive datatypes
var b=[10,30,50]
console.log(typeof b);//object


// how variable is executed(Global Execution Context)
console.log("start");    //start
var x=900;               //var x=undifiend=>900
let y;                   //let y=undifined
const z=1000;           //const z=undifined=>1000
console.log(x);         //900
y=700;                  //y=undifined=>700
console.log(z);         //1000
console.log("end");     //end

