let image = document.querySelector('img')
// let image = document.getElementsByTagName('img')
console.log(image);
image.style.width="500px"
image.style.height="500px"
image.setAttribute("alt","burgerImage")
//hasAttribute is the method it returns true/false wheather the given value is present or not
console.log(image.hasAttribute('src'));
console.log(image.hasAttribute('alt'));
image.setAttribute("title","It is a burger image")
console.log(image.title);
console.log(image.hasAttribute('title'));
// removeAttribute is to remove the attribute
image.removeAttribute('title')
console.log(image.hasAttribute('title'));

// Event handling

function handleclick(){
    let head = document.getElementById("head")
    head.innerText="Nice to meet you"
}
//another way of event handling using addEventListner 
let heading =document.getElementById("heading")
heading.addEventListener("click",()=>{
    heading.innerText="bye"
})
function handleMoveOver(){
    let well =document.getElementById("well")
    well.style.backgroundColor="red"
}
function handleMoveOut(){
    let well = document.getElementById("well")
    well.style.backgroundColor="initial"
}
let well = document.getElementById("well");

well.addEventListener("mouseover", handleMoveOver);
well.addEventListener("mouseout", handleMoveOut);

let nice = document.getElementById("nice");
nice.addEventListener("mouseover",()=>{
    nice.style.color="blue"
    nice.style.textTransform="uppercase"
})
nice.addEventListener("mouseout",()=>{
    nice.style.color="initial"
    nice.style.textTransform="initial"
})
