// let count=1;

// const { startTransition } = require("react");

// let id = setInterval(()=>{
 
//  console.log(count);
//   count++
// },2000);

// clearInterval(id);

let h2 = document.querySelector("#count");

let id;
let count = 0;

let  start = ()=>{
   id = setInterval(()=>{
     h2.innerHTML = count;
     console.log(count);
     count++;
    },2000)
}

let stop = ()=>{
clearInterval(id);
};