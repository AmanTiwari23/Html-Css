 let number = prompt("Enter a number:");
    number = Number(number);

    let originalNumber = number;

    let digits = number.toString().length;

    let sum = 0;

    while (number > 0) {
      let digit = number % 10;
      sum += Math.pow(digit, digits);
      number = Math.floor(number / 10);
    }

    if (sum === originalNumber) {
      alert(originalNumber + " is an Armstrong number.");
    } else {
      alert(originalNumber + " is not an Armstrong number.");
    }