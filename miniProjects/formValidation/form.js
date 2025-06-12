function validateForm() {
  let nameError = document.getElementById("nameError");

  let emailerr = document.getElementById("emailError");

  let mobileerr = document.getElementById("mobileError");

  let passerr = document.getElementById("passwordError");

  let cpasserr = document.getElementById("confirmPasswordError");

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (name === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  
  if (!(email.includes('@') && email.includes('.com')) ) {
    emailerr.innerText = "Enter a valid email";
    isValid = false;
  }

  
  if (mobile.length!=10) {
    mobileerr.innerText =
      "Enter a 10-digit number";
    isValid = false;
  }else if(isNaN(mobile)){
     mobileerr.innerText =
      "Enter a 10-digit number only";
      isValid= false;
  }

  if (password.length < 6) {
    passerr.innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }
  
  if (confirmPassword != password) {
    cpasserr.innerText =
      "Passwords do not match";
    isValid = false;
  }

  return isValid;
}
