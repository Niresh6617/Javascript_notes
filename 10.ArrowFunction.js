//assigning normal function
function task(a,b){
    console.log(a+b);
}
task(10,2)

//arrowfunction
let task1=(a,b)=>console.log(a-b);
task1(10,"string")

//if it contains a return keyword then u have to use {}
// if we use return in function we have to execute with log(function()call)
const task2=(a,b)=>{return a*b;}
console.log(task2(10,2));  


//if it contains multi line statement the u have to enclosed within {}

var task3=(a,b)=>{console.log(a);console.log(b);}
task3(12,5)

//Arrow Function: it is a simplified version of named function
// let a=(a,b)=>{//finction decalaration
//     console.log(a+b);
// }
// a("String","10")
