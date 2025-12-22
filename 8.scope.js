//scope execution :where to where you can access
//or in simple terms -scope means where you can use a variable in your program.
console.log("start");//start
var x="999";//global variable declaration and initialization
console.log(x);//"999"
var n ="Suresh";
let y="HTML";//script scope variable declaration and initialization
const z="hello";//script scope variable declaration and initialization
let c ="Niresh"
function fun1(){//function declaration
    let n="react"
    console.log(x);//variable access before declaration
    
    console.log(z);
    var x="bye";
    console.log(this.n);

}
fun1();
console.log(x); //999
console.log(n); //react
console.log("end");


// exercise
// console.log(x); // UD 
// var x=10;
// var y=15;
// const z=20;
// function fun1(){
//     console.log(x);//UD
//     let y ="Niresh"
//     console.log(y);//Niresh
//     console.log(globalThis.y);//15 works in browser JS engine 
//     console.log(z);//20
//     var x="Niresh"
// }
// fun1();