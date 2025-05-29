// function is a way to group code together , you can run it anytime anywhere;

function display(){
    console.log("hellow world");
}

display();

function add(x,y){
    console.log("addition of X and Y : ",x+y);
}

add(10,20);

function multiply(x,y){
    console.log("multiply value is : " , x*y);
}

function divide(x,y){
    return x/y;
}

multiply(10,2);

let value = divide(20,2);

console.log(value);

function cube(x){
    return x*x*x;
}

let value2 = cube(2);
console.log(value2)
alert("cube of 2 is : "+value2);

function showName(name){
    alert(name);
}

showName("Aman Tiwari");