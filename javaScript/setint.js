// let count=1;

// const { startTransition } = require("react");

// let id = setInterval(()=>{
 
//  console.log(count);
//   count++
// },2000);

// clearInterval(id);

let h2 = document.querySelector("#count");
let inpval = document.querySelector("#inpval");

let id;

let  start = ()=>{
 let count= (+inpval.value);
   id = setInterval(()=>{
    
    console.log(count);
     h2.innerHTML = count;
     count++;
    },1000);
}

let stop = ()=>{
clearInterval(id);
};