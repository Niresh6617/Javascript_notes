// to change the content inside the select element using change Event which is mainly used in forms in html
let clr=document.getElementById("clr")
console.log(clr);

function handleChange(){
    console.log(clr.value);//value is from  html=>select tag 
    if(clr.value=="select color")
    {
        document.body.style.backgroundColor="initial"
    }
    else
    {
        document.body.style.backgroundColor=clr.value//it takes the input from the content
    }
}
//we dont call the above function in js and declare it on HTML