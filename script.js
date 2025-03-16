function validateCaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    alert("Please complete the CAPTCHA!");
    return false;
  }
  return true;
}
