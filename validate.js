// function to validate email adresses
function validateEmail(email) {
  // regex code for valid email address
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
}

// function to validate phone numbers
function validatePhone(phone) {
  // regex code for valid phone number
  var phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return phoneReg.test(phone);
}

var submitButton = document.getElementById("submitButton");

function validate() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var phone = document.forms["contact"]["phone"].value;

  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email == "" || !validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (phone == "" || !validatePhone(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }
  alert("Thanks for your inquiry!");
}

submitButton.addEventListener("click", validate);
