const numbers = [10,20,30,40];
const arr = new Array();

arr[0] = "apple";
arr[1]="aman";

arr[2] = 100;
console.log(arr);

numbers.push(60);

console.log(numbers);

numbers.pop();


numbers.shift();
console.log(numbers);

numbers.unshift(300);

console.log(numbers);

numbers.reverse();

console.log(numbers)

let x ;

x = numbers.length;

console.log(numbers);
console.log("length is :" , x);

x = numbers.includes(400);

console.log("includes 40 :",x);

x = numbers.indexOf(300);

console.log(x);

//convert array to string

x = numbers.join()

console.log(x);

//convert string to array 

x = x.split(",");

console.log(x);

x = numbers.slice(0,3);

console.log(x);

x = numbers.splice(0,2,60,70);

console.log(numbers);

x = numbers.splice(0,1,100,200,300,400);

x = numbers.slice(1,4).reverse().toString().charAt(0);

console.log(x);

const fruits = ["apple","cherry", "kivi"];
const veggies = ["lemon","cauliflower", "cucumber"];

const mixed = fruits.concat(veggies);

console.log(mixed);

const newArray = [...fruits, ...veggies];

console.log("newArray using spreed : ",newArray);

const array = [1,2,3,4,5,6,7,8];

const [a,b,c,d,...y] = array;


console.log(a);
console.log(b);
console.log(y)