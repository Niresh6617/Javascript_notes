// to create parent div
let main_div=document.getElementById("main_div");
console.log(main_div);
main_div.style.height="600px";
main_div.style.width="100%";
main_div.style.border="2px solid red";
main_div.style.display="flex";
main_div.style.alignItems="center";
main_div.style.justifyContent="space-evenly"

//create child div1 inside the parent div
let inner_div1=document.createElement("div");
console.log(inner_div1);
inner_div1.style.height="300px";
inner_div1.style.width="300px";
inner_div1.style.border="2px solid black";
inner_div1.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"

//create chid div2 inside the parent div
let inner_div2=document.createElement("div");
console.log(inner_div2);
inner_div2.style.height="300px";
inner_div2.style.width="300px";
inner_div2.style.border="2px solid black";
inner_div2.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"

//create chid div2 inside the parent div
let inner_div3=document.createElement("div");
console.log(inner_div3);
inner_div3.style.height="300px";
inner_div3.style.width="300px";
inner_div3.style.border="2px solid black";
inner_div3.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg')"


//main_div is the parent and the inner_div1...3 is the child so parent have to append the child 
main_div.appendChild(inner_div1);
main_div.appendChild(inner_div2);
main_div.appendChild(inner_div3);


//instead of declaring style property in js create a new css file and create the id or clas in js then work on cssfile

let head=document.createElement("h1")
//to add content
head.innerHTML="Welcome"
// innertext is used to display the content in webpage 
// innerHTML is used to display the content and also it accepts tag in webpage 

//to create a class in css
head.className="main_cls";

//to create multiple class name using classlist
head.classList.add("heading");

//To remove the classList using remove method 
// head.classList.remove("heading")

//to append head into body
document.body.append(head)