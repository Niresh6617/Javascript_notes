//to get element in html using js by id
let head=document.getElementById("head")
console.log(head);
//style in js
head.style.backgroundColor="red";

//to get element in html using js by class
let elem=document.getElementsByClassName("cls")
console.log(elem);
elem[1].style.backgroundColor="orange";
elem[2].style.color="yellow";

//to target the tags in html using js [tagname]
let elems=document.getElementsByTagName("h1")

//QuerySelector
let h2 = document.querySelector('*')
h2.style.backgroundColor="red"

let span = document.querySelector('p > span')
span.style.backgroundColor="grey"
//QuerySelectorAll
let h3 = document.querySelectorAll('.h3')
console.log(h3);
h3[0].style.backgroundColor="green"; 
h3[1].style.backgroundColor="blue"; 
h3[2].style.backgroundColor="violet"; 