const inputField = document.getElementById('input');
const insertcislo = cislo => inputField.textContent += cislo;
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;
const erasecislo = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
const clearInput = () => inputField.textContent = '';