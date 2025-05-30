// // function is a way to group code together , you can run it anytime anywhere;

// function display(){
//     console.log("hellow world");
// }

// display();

// function add(x,y){
//     console.log("addition of X and Y : ",x+y);
// }

// add(10,20);

// function multiply(x,y){
//     console.log("multiply value is : " , x*y);
// }

// function divide(x,y){
//     return x/y;
// }

// multiply(10,2);

// let value = divide(20,2);

// console.log(value);

// function cube(x){
//     return x*x*x;
// }

// let value2 = cube(2);
// console.log(value2)
// alert("cube of 2 is : "+value2);

// function showName(){
//     let name = prompt("enter name : ");
//     alert("your name Is :"+name)
//     return name;
// }

// showName();

// const person = {
//     name:"aman",
//     age:23,
// }

// function personcall(obj){
//   console.log("my name is ",obj.name," and i am ",obj.age, " years old");
// }

// personcall(person);

// function sum(a,b){
//     console.log(`sum of the a and b is : ${a+b}`);

// }
// function greter(a,b){
//     if(a>b){
//         return a;

//     }else return b;

// }

// function evenodd(a){
//     if(a%2==0){
//         return "even";
//     }else return "odd";
// }

// function square(a){
//     return a*a;
// }

// function celtoferan(a){
//     return ((a*9)/5+32);
// }

// sum(10,20);

// let val = greter(10,20)
// console.log(val)

// let val2 = evenodd(20);

// let val3 = square(10);

// let val4 = celtoferan(30);
// console.log(val2);
// console.log(val3);
// console.log(val4);


// function expresstion and arrow function

// let name1 = function (x){
   
// }

// let name = ()=>{

// }

let  sum =(a,b)=>{
    console.log(`sum of the a and b is : ${a+b}`);

}

let  greter=(a,b)=>{
    if(a>b){
        return a;

    }else return b;

}

let evenodd=(a)=>{
    if(a%2==0){
        return "even";
    }else return "odd";
}

let square = (a)=>{
    return a*a;
}

let celtoferan = (a)=>{
    return ((a*9)/5+32);
}

sum(10,20);
let val = greter(10,20)
console.log(val)

let val2 = evenodd(20);

let val3 = square(10);

let val4 = celtoferan(30);
console.log(val2);
console.log(val3);
console.log(val4);
