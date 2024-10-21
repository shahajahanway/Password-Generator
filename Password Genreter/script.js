const passLength = document.querySelector('.passwordLength');
const options = document.querySelectorAll('.password-setting .option input');
const generateBtn = document.querySelector('.generate-btn');
const password = document.querySelector('.password');
const copyBtn = document.querySelector('#copy-btn');
const lengthValue = document.querySelector('.length-value');

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

passLength.addEventListener('input', () => {
  lengthValue.textContent = passLength.value;
});

generateBtn.addEventListener('click', () => {
  let selectedCharacters = "";
  let randomPassword = "";

  options.forEach(option => {
    if (option.checked) {
      selectedCharacters += characters[option.id];
    }
  });

  if (selectedCharacters.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  for (let i = 0; i < passLength.value; i++) {
    randomPassword += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

  password.value = randomPassword;
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(password.value);
  alert("Password copied to clipboard!");
});
