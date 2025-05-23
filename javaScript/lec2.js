const num = Math.ceil(Math.random()*10);
console.log(num);
const guess  = prompt("Guess the number between 1 to 10 ");

if(guess == num){
    alert("Matched");
}else{
    alert("try again");
}