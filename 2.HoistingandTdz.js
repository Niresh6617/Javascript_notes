// what happen if you console a variable before Initialization in var keyword(hoisting variable)
console.log(a);//undefined
var a=10;
console.log(a);//10
// what happen if you consle a variable before Initialization in let/const(it goes to temporal dead zone)
//console.log(u);//throws an refference error//once it throws an error next statement it dont execute
let u=100;


// example
console.log("start");//start
var a="html";
const m="CSS";
console.log(m);//Css
console.log(b);//undefined
var b="java script";
//console.log(n);//throw an error
let n;
console.log(n);//undefined
console.log("end");//end