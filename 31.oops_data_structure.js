// console.log("This is OOp's and DataStructure");

// Algorithm - is a Step by step way to solve the problem efffectivly
// To find max in an array
// let arr = [10,20,30]
// function findMax(arr){
//     let max = arr[0];
//     for(let i =0 ; i < arr.length ; i ++){
//         if(arr[i] > max ){
//             max = arr[i]
//         }
//     }
//     return max
// }
// let findmax = findMax(arr)
// console.log(findmax);

//Encapsulation - means Binding of data and method to hiding the implimentation details 
// data => variables
// method => functions => getter and setter method 
// It will restrict some data (variable and their values ) access to some part of object to protect data 

class Car{
    constructor(name,color){
        this.name = name;
        let _color = color
        this.getColor = function(){
            return _color
        };
        this.setcolor = function(_ccolor){
            _color = _ccolor 
            return _ccolor
        }
    }
    start(){
        console.log(`${this.name} is a car`);
        
    }
}
let car1 = new Car("hundai","black");
car1.start()
console.log( car1.getColor());
console.log( car1.setcolor("niresh"));

class BankAccount {
    constructor(accountHolder , balance ){
        this.accountHolder = accountHolder;
        let _balance = balance;

        this.getBalance = function(){
            return _balance
        }
        this.deposite = function(amount){
            console.log(`Depositing ${amount}...`);
            if(amount > 0){
                _balance = amount + _balance;
                console.log(`Balance after deposit: ${_balance}`);
            }
            else{
                console.log(`please eneter the correct amount`);
            }
            
        }
        this.withdraw = function(amount){
            console.log(`Withdrawing  ${amount}...`);
            if(_balance > 1000){
                _balance = _balance - amount
                console.log(`Balance after withdrawal: ${_balance}`);
            }
            else{
                console.log(`Insufficiant balance`);
            }
            
        }
    }
}

let AccountHolder1 = new BankAccount("Niresh",5000)
console.log("Account Holder:" + AccountHolder1.accountHolder);
console.log("Current Balance:" + AccountHolder1.getBalance());
AccountHolder1.deposite(100) ;
AccountHolder1.withdraw(100);