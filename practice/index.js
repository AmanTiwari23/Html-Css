// let sub = prompt("enter your favoratie subject");

// let h4 = document.createElement("h4");

// h4.innerHTML=sub;

// document.getElementsByTagName("body").appendChild(h4);
const str = "aman@13!!#";
const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');

// Test the function
console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ')); // Output: w3resource