let today = new Date();
console.log(today);
let day = today.getDay();
console.log(day);
let daylist = [
  "Sundey",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("today is : " + daylist[day]);

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM";

console.log("current time : " +hour + prepand + " : " + min + " : " + sec)