//  let a = prompt("enter 1st value");
//   let b = prompt ("enter second value");
//   let c = prompt("enter third value");

//   if(a>b){
//     if(a>c){
//       console.log("a is greatest");
//     }else{
//       console.log("c is greatest");
//     }
//   }else if(b>c){
       
//       console.log("b is greatest");

//     }else{
//       console.log("c is gratest");
//     }
let arr = [2,3,4,2,3,3,4,5,6] 

function countOccurrences(arr) {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
}

let arrcount = countOccurrences(arr);
console.log(arrcount);