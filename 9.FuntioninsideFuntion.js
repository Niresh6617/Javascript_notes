//function inside the another fuction
//example 1
// console.log("Start");// start
// const x="hello";
// var y=666;
// console.log(x); //"hello"
// function fun1(){
//     console.log(y); //666   
//     console.log(this.y);//666
//     let z;
//     y="333";
//     console.log(a); //UD
//     var a=100;
//     z=555;
//     const b="Welcome";
//     function fun2(){
//         console.log(z); //555
//         var y="bye";
//         console.log(this.y); //333
//         console.log(y);//"bye"

//     }
//     fun2();

// }
// fun1();
// console.log("end");//end

//example 2
// console.log("start");//start
// let Cname="WEB";
// var ID="VDWE3";
// console.log(ID);//VDWE3
// function task1(){
//     const place ="vadapalani";
//     Cname="WEBTECH"
//     console.log(this.ID);
//     console.log(place);
//     var sub1="HTML";
//     function task2(){
//         console.log(place);
//         console.log(days);
//         var days=40;
//         let sub2="Css";
//         console.log(sub2);
//         function task3(){
//             console.log(sub1);
//             const sub3="java Script";
//             console.log(sub3);
//             sub2="react js "
//             sub1="node js "
//         }        
//         task3()
//         console.log(sub2);
//     }
//     task2()
//     console.log(sub1);
//     console.log(Cname);
// }
// task1()
// console.log("end");

//Example 2
console.log("start");// start   
let Cname="WEB";
var ID="VDWE3";
console.log(ID); //"VDWE3"
function task1(){
    const place ="vadapalani";
    Cname="WEBTECH"
    console.log(this.ID); //VDWE3
    console.log(place); //"vadapalani"
    var sub1="HTML";
    function task2(){
        console.log(place); //vadapalani
        console.log(days); // UD
        var days=40;
        let sub2="Css";
        console.log(sub2); //Css
        function task3(){
            console.log(sub1); //HTML
            const sub3="java Script";
            console.log(sub3); // Javascript
            sub2="react js "
            sub1="node js "
        }        
        task3()
        console.log(sub2); //react js
    }
    task2()
    console.log(sub1); // node js
    console.log(Cname); // WEBTECH
}
task1()
console.log("end"); //end
