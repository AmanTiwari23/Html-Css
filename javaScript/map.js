// let num = [2,4,5,7,8,9];

// let newarr = num.map(e => e-1);

// console.log("this arry is generated by map",newarr);

// let num2 = [5,6,2,4,7,8];

// let num2arr = num2.filter(e => e>10);

// console.log("this arry is generated using filter", num2arr);

// let num3 = [6,2,4,9,5,8,10];
// console.log("this is printed using for each");

// num3.forEach(e => console.log( e*2));

let student = [{
    name:"Aman",
    city:"satna",
    age:24
},
{
    name:"piyush",
    city:"indore",
    age:25
},
{
  name:"arvind",
  city:"rewa",
  age:26
}]

let showdata = document.querySelector("#showdata");

student.map((e)=>{
    showdata.innerHTML+= `
    <tr>
    <td>${e.name}</td>
    <td>${e.city}</td>
    <td>${e.age}</td>
    </tr>
    `
})




