let inp = document.querySelector(".inp");
let nameelement = document.querySelector(".name");

// nameelement.innerHTML = localStorage.myName;

nameelement.innerText = localStorage.getItem("myName") || "";

inp.addEventListener("input",(e)=>{
   localStorage.setItem("myName",e.target.value);
   nameelement.innerText = localStorage.getItem("myName");
})