// const num = Math.ceil(Math.random()*10);
// console.log(num);
// const guess  = prompt("Guess the number between 1 to 10 ");

// if(guess == num){
//     alert("Matched");
// }else{
//     alert("try again");
// }

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);