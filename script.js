function checkPasswordStrength() {
  const passwordInput = document.getElementById("passwordInput");
  const progressBar = document.getElementById("progressBar");
  const feedback = document.getElementById("feedback");

  const password = passwordInput.value;
  const passwordLength = password.length;
  let strength = passwordLength * 5;

  if (passwordLength < 8) {
    strength = 0;
    feedback.innerText = "Should be longer";
  } else if (passwordLength >= 8 && passwordLength < 12) {
    feedback.innerText = "Pretty good";
  } else {
    feedback.innerText = "Grrrreat!";
  }

  progressBar.style.width = `${strength}%`;
  progressBar.style.backgroundColor = getProgressBarColor(strength);
}

function getProgressBarColor(strength) {
  if (strength < 40) {
    return "red";
  } else if (strength < 80) {
    return "orange";
  } else {
    return "green";
  }
}
