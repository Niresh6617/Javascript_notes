//for methods
let arr=[10,20,30,40]
//for in method it will return the index of an array
// for(let i in arr)
// {
//     console.log(i);
// }
// console.log(i);
//for of method it will provide the values of each index
// for(var t of arr)
// {
//     console.log(t);
// }
// console.log(`the value of  arr is ${t}`);

//for each is an higher order function it is differ from (in,of)methods
// arr.forEach((val,ind) => {
//     console.log(`the value ${val} and the index ${ind}`);
// });
//DOM Document object model:it is mainly used to interact with html and css
// let head=document.getElementById("head");
// head.style.backgroundColor="blue";
// console.log(head);
// let para=document.getElementsByClassName("p");
// console.log(para);
// //we cant give values for class attribute directly by the help of index
// para[0].style.backgroundColor="orange";
// para[1].style.backgroundColor="whitesmoke";
// para[2].style.backgroundColor="green";

let para=document.querySelector(".p")
console.log(para);
para.style.textDecoration="underline";

let para2=document.querySelectorAll(".p")

console.log(para2);
para2[0].style.backgroundColor="orange";
para2[1].style.backgroundColor="whitesmoke";
para2[2].style.backgroundColor="green";





