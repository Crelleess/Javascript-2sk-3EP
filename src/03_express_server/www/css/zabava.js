const inputField = document.getElementById('input');
const insertcislo = cislo => inputField.textContent += cislo;
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;
const erasecislo = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
const clearInput = () => inputField.textContent = '';

//GENERATOR
var adjective = ["Tlustý", "Hubený", "Vyfetovaný", "Démonický", "Hlavní", "Smradlavý", "Vysoký", "Špatný", "Dobrý", "Odborný", "Černý", "Bílý" ] 
var object = [ "Adam", "Ivan", "Jaguár", "Lamborghini", "Hamburger", "Řízek", "Auto", "Autobus", "Vidlička", "Běloch", "Mamut", "Černoch", "Vajíčko", "Kocour",]
var list;

function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}
