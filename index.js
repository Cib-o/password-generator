const password = document.getElementById('password');

function genPassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 12;
  let password = '';

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const copyPassword = document.getElementById('password');
  copyPassword.select();
  document.execCommand('copy');
}