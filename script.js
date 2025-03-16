function validateCaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    alert("Please complete the CAPTCHA!");
    return false;
  }
  return true;
}

// Optional: Add glowing title animation
let title = document.querySelector("h1");
setInterval(() => {
  title.style.color = title.style.color === '#00ffff' ? '#ff0080' : '#00ffff';
}, 1000);
