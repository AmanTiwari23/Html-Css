function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;


  for (let i = 1; i <= 6; i++) {
    document.getElementById(`dice-${i}`).style.display = "none";
  }

 
  document.getElementById(`dice-${randomNum}`).style.display = "block";
}