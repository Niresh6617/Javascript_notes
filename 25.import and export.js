// Type:Module means it breaks down code and seperate to another files 
// This can achive by import and export keyword
import car from "./25.1 js_new.js";
// we can get the value from aother file
//car object
let division=document.getElementById("division")
let list=document.createElement("ul")
list .innerHTML=`
<li>${car.cName}</li>
<li>${car.cColor}</li>
<li>${car.cPrice}</li>
<li>${car.cVersion}</li>`;
//car object inside bike object
let division2=document.createElement("division2");
car.bike.map((bikes)=>{
    let list2=document.createElement("ul")
    list2.innerHTML=`
    <li>${bikes.bColor}</li>
    <li>${bikes.bName}</li>
    <li>${bikes.bPrice}</li>`
    division2.appendChild(list2); 
})
division.appendChild(list);//list is append with division 
document.body.append(division)
document.body.append(division2)


// let division2=document.getElementById("division2")
// bike.map((bikes)=>{
//     let list=document.createElement("ul")
//     list.innerHTML=`
//     <li>${bikes.bColor}</li>
//     <li>${bikes.bName}</li>
//     <li>${bikes.bPrice}</li>`
//     division2.appendChild(list)
// })
