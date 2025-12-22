//their are totally four types of Fuction
//types of function
/*
    1.named Function 
    2.anonymous function
    3.function with expression 
    4.Immediate invoke function
*/
//1.named function:A function which is declare with name
function fun1(){//non-parameterised
    console.log("hello this is named function");
}//function declaration

fun1()//function call
function fun2(x,y){//parameterised fuction
    console.log("This is Parameterised named function "+ (x+y));
}
fun2(10,5)//function call

//2.anonymous function: Any Function which declare without a name 
// function()
// {
//     console.log("this is anonymous function");
// }

//3.Function with Expression: a function which is declared within a variable and call that variable
//Expression means a combination of values, variables and operators 
//Whenver a function contain a return then you have to give the function with Expression and call the function by giving a variable name.
const task=function(x,y)
{
    console.log("this is function with expression");//first class citizen or first class function
    console.log(x-y);
}
task(10,54)

//4.Immidiate invoke function:You can call this function immediatly when its declare only once
// (
//     function(){
//         console.log("this is immidiate invoke function");
//     }
// )
// ()//function call

var obj1={
    string:"String",
    number:12,
    boolean:false,
    array:[10,20,"hi Petter griffin",10+20],
    conct:10-"false",
    bigint:107688647473n,
    
}
console.log(obj1);

//object calling inside function 
const fun={//object
    id:100,
    task:function()//function with expression
    {
        console.log("This is the function which calling inside the object");
    }
}
console.log(fun.task);//object console
fun.task()//function call


// exercise
const fun3 = function(x,y){
    var x =5;
    let xy = 10;
    console.log("this is a exercise  function with expression");
    return x+xy
}
console.log(typeof(fun3));
fun3();
console.log(fun3());


