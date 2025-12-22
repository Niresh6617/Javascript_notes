// CallBack is a function that passes an aregument to another function
//  It is used to handle asynchronous operation
//      1.Reading a file
//      2. Network request 
//       3.Interact with databases
//    It is Like Hey When you done call next one 
hello(Goodbye);
function hello(callback){
    console.log('Hello!');
    callback();
}

function Goodbye(){
     console.log('GoodBye!');
    
}