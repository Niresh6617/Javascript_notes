// function fun1(x,y){
//     console.log(x+y);
// }
// fun1(5,5)
// Higher-orderfunction means a function which accepts another funcion as an arguments
// callback function means it passes the function and execute inside the higher order function 
// function fun2(a,b){ //callback function
//     console.log(a+b);   
// }
// function fun3(x,y,fun2){ //higher order function
//     return fun2(x,y)
// }
// let higherOrderFunctionVariable = fun3(5,10,fun2);

// // find dublicate String
// function duplicateString(params){
//     let object={} // Create an empty object to store the value
//     for (let index = 0; index < params.length; index++) {
//         console.log(object);
//         // console.log(params[index]);
//         if(object[params[index]]){
//             object[params[index]] += 1//if the character is have same as in index value then increment by 1
//         }
//         else{
//             object[params[index]]=1
//         }  
//     }
//     console.log(object);
//     console.log(typeof(object));
    
// }
// duplicateString("zamam")


//                                 DOM Document Object Model
// To Get the Element using DOM or Selecting The DOM 
// let para = document.getElementById("para")
// console.log(para);
// para.style.backgroundColor="red";
// var head =document.getElementsByClassName("head")[0]
// console.log(head);
// head.style.backgroundColor="green";
// head.textContent="This is a class name head"
// const taghead  = document.getElementsByTagName('h2')[0];
// console.log(taghead);
// taghead.style.backgroundColor="yellow"

// // let h3 = document.getElementById('h3')
// // console.log(h3);
// // h3.style.textAlign="center"
// let h3 = document.querySelectorAll('.h3')
// console.log(h3);
// h3[0].style.backgroundColor="green"; 
// h3[1].style.backgroundColor="blue"; 
// h3[2].style.backgroundColor="violet"; 

// Create_Element 
// create an parent DIV
// let main_div = document.createElement("div")
// console.log(main_div);
// main_div.style.width="80%"
// main_div.style.height="500px"
// main_div.style.border="1px solid red"
// main_div.style.backgroundColor="hsl(199, 43%, 32%)"
// main_div.style.display="flex"
// main_div.style.alignItems="center"
// main_div.style.justifyContent="space-between"

// //whenever create an element you have to append the element into parent here body is the parent 
// //hint if you create parent div when there is no element ahead then appen to body as a parent
// document.body.appendChild(main_div)
// //styles for main_div container
// document.body.style.display="flex"
// document.body.style.flexDirection="column"
// document.body.style.alignItems="center"
// document.body.style.justifyContent="center"


// //create child div
// let child_div1 = document.createElement("div")
// console.log(child_div1);
// child_div1.style.width="20%"
// child_div1.style.height="50%"
// child_div1.style.border="1px solid black"
// child_div1.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"
// child_div1.style.backgroundSize = "cover";  // Ensures the image covers the whole div
// child_div1.style.backgroundPosition = "center";  // Centers the image in the div
// child_div1.style.backgroundRepeat = "no-repeat";  // Prevents image repetition

// //create child div2
// let child_div2 = document.createElement("div")
// console.log(child_div2);
// child_div2.style.width="20%"
// child_div2.style.height="50%"
// child_div2.style.border="1px solid black"
// child_div2.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"
// child_div2.style.backgroundSize = "cover";  // Ensures the image covers the whole div
// child_div2.style.backgroundPosition = "center";  // Centers the image in the div
// child_div2.style.backgroundRepeat = "no-repeat";  // Prevents image repetition

// //create child div3
// let child_div3 = document.createElement("div")
// console.log(child_div3);
// child_div3.style.width="20%"
// child_div3.style.height="50%"
// child_div3.style.border="1px solid black"
// child_div3.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"
// child_div3.style.backgroundSize = "cover";  // Ensures the image covers the whole div
// child_div3.style.backgroundPosition = "center";  // Centers the image in the div
// child_div3.style.backgroundRepeat = "no-repeat";  // Prevents image repetition

// //create child div4
// let child_div4 = document.createElement("div")
// console.log(child_div4);
// child_div4.style.width="20%"
// child_div4.style.height="50%"
// child_div4.style.border="1px solid black"
// child_div4.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"
// child_div4.style.backgroundSize = "cover";  // Ensures the image covers the whole div
// child_div4.style.backgroundPosition = "center";  // Centers the image in the div
// child_div4.style.backgroundRepeat = "no-repeat";  // Prevents image repetition

// main_div.appendChild(child_div1)
// main_div.appendChild(child_div2)
// main_div.appendChild(child_div3)
// main_div.appendChild(child_div4)

//              // to give css in seperate file using className and classList in Exercise.css File
// // to create an h1 element
// let head2 = document.createElement('h1')
// head2.innerHTML="<i>This is DOM heading</i>"
// // innertext is used to display the content in webpage 
// // innerHTML is used to display the content and also it accepts tag in webpage 
// // head2.innerText="This is also The Dom Heading"

// //To create an class 
// head2.className="head2"

// //To create another class for same variable using classList it creates multiple classes To the Variable 
// head2.classList.add("head2_classList")

// // append it to body
// document.body.append(head2)

// setAttribute
// let container = document.createElement('div')
// container.style.width="600px"
// container.style.height="500px"
// container.style.border="1px solid red"

// document.body.appendChild(container)
// document.body.style.display="flex"
// document.body.style.flexDirection="column"
// document.body.style.justifyContent="center"
// document.body.style.alignItems="center"

// let button = document.createElement('button')
// // button.textContent="button"
// button.innerHTML="<b>button</b>"
// button.setAttribute("type","submit")
// container.appendChild(button)

// //                      Event Handling
// let niresh = document.getElementById("niresh")
// niresh.addEventListener('click',()=>{
//     niresh.innerHTML="<b>Niresh is Mass</b>"
//     niresh.style.textAlign="center"
//     niresh.style.color="gold"
//     niresh.style.backgroundColor="black"
// })
// function nitheshfun(){
//     let nithesh = document.getElementById("nithesh")
//     nithesh.innerHTML="Nithesh is Loose"
//     nithesh.setAttribute("type","submit")
// }
// let suresh = document.getElementById('suresh')
// suresh.addEventListener('mouseover',()=>{
//     suresh.style.backgroundColor="red"
//     suresh.style.textAlign="center"
//     suresh.style.color="yellow"
//     suresh.innerHTML="Suresh is GOD"
// })
// suresh.addEventListener('mouseout',()=>{
//     suresh.style.backgroundColor="initial"
//     suresh.style.textAlign="initial"
//     suresh.style.color="initial"
// })
// let valli = document.getElementById('valli')
// function vallifun(){
//     let vallicontanier = document.createElement('div')
//     vallicontanier.className="vallicontainer"
//     valli.classList.add('valli')
//     valli.appendChild(vallicontanier)
// }

//                               Change Event
// This is to change the even by ussing onchange attribute
// The onchange attribute in HTML is used to trigger a JavaScript function 
// when the value of an input, select, or textarea element changes.
// let color = document.querySelector('#color')
// console.log(color);
// function changeColor(){
//     console.log(color.value);
//     if(color.value == 'select value')
//     {
//         document.body.style.backgroundColor='initial'
//     }
//     else{
//         document.body.style.backgroundColor=color.value
//     }
    
// }

