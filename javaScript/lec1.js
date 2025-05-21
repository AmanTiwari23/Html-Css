// let today = new Date();
// console.log(today);
// let day = today.getDay();
// console.log(day);
// let daylist = [
//   "Sundey",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log("today is : " + daylist[day]);

// let hour = today.getHours();
// let min = today.getMinutes();
// let sec = today.getSeconds();

// let prepand = (hour >= 12) ? "PM" : "AM";

// hour = (hour >= 12)? hour -12 :hour ;

// console.log("current time : " +hour + prepand + " : " + min + " : " + sec)



function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}