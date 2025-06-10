// replace gi method 
// hoisting 
// split
// splice 
// 

// const obj = {
//     name: "aman",
//     age: 23
// }

// console.log(obj.name);

// delete obj.age;
// console.log(obj);

// let str="arvinda"
// let str1=[...new set(str)].join('');
// console.log(str1);


// let ans = confirm("are you fine");

// console.log(ans);

// let num = 1234;
// let num2 = num.toString().split("");
// console.log(num2);

// let ptag = document.querySelector("#text");




// let text = document.querySelector("#text");

// function textdel(){
//         //  text.innerHTML = "";
//          text.style.display = "none";
// }
// let btn = document.querySelector("#button");
// let img = document.querySelector("img");

// let showtext = (() => {
//     (text.style.display=="none") ? (text.style.display="block", btn.innerHTML="hide", img.src="./iphoneimg2.jpg") : (text.style.display="none",btn.innerHTML="show",img.src="./iphone1.jpg");
//     // if(text.style.display=="none"){
//     //        text.style.display = "block";
//     //        btn.innerHTML = "hide";
//     // }else{
//     //     text.style.display = "none"
//     //     btn.innerHTML = "show"
//     // }
// });

let inp1 = document.querySelector("#first");
let inp2 = document.querySelector("#second");
let text = document.querySelector("#text");
let show = ()=>{
    text.innerHTML= ((+inp1.value)+ (+inp2.value));
}


