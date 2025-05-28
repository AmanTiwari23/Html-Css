// const arr = [1,2,3,4,5];

// arr.splice(0,0,0);
// arr.splice(6,0,6);

// console.log(arr.reverse());


const arr1 = [1,2,3,4,5];

const arr2 = [5,6,7,8,9,10];


const arr3 = [...arr1,...arr2];

arr3.splice(5,1);

console.log(arr3);