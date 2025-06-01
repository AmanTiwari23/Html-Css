// for(let i = 0 ; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for(let i = 0; i<=100; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

const person = {
    name:"aman",
    age:24,
    city:"bhopal",
    state:"mp",
    country:"india",
};

for(let x in person){
    console.log(person[x]);
}

const arr = [2,3,4,5,6];

for(let i in arr){
    console.log(arr[i]);
}

const fruits = ["apple","banana","grapes","kivi"]
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let x in fruits){
    console.log(fruits[x]);
}

for(let x of fruits){
    console.log(x);
}

let value = "Sundayyyyyyyyyyyyyyyyy!!YAYYYY";

for(let x of value){
    console.log(x);
}