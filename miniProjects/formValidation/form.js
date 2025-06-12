function validateForm() {
  
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  let mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    document.getElementById("mobileError").innerText =
      "Enter a 10-digit number";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match";
    isValid = false;
  }

  return isValid;
}
