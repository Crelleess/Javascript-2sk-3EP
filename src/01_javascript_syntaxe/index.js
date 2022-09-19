// jednoradkovy komentar

/*
    viceradkovy
    
    komentar
*/

// textovy vystup interpretu
console.log('Hello world!');

// POZOR NA SYSTEM DEKLARACE PROMENNYCH

// promenne "neni treba" deklarovat
x = 5;
console.log(x);

// ale...
y = 10;
console.log(y);
var y;
// tzv. hoisting presune deklaraci na zacatek
// totez se stane, i pokud promennou nedeklarujeme

// var zna jen platnost ve skriptu / ve funkci

function mojeFunkce() {
    z = 8;
    console.log(z); // vypise se 8
    var z = 6; // var z se hoistingem presune na zacatek funkce
    
    u = 1; // promenna u se dodeklaruje jako GLOBALNI
    console.log(u);
}

mojeFunkce();
console.log(u); // u je viditelne i zde

// JAK LEPE DEKLAROVAT PROMENNE

// console.log(a); // promennou nelze pouzivat pred deklaraci
let a = 5; // tato promenna ma "normalni" rozsah platnosti
const b = 6; // b uz nemuze menit svoji hodnotu

// b = 0; // toto nelze

// DATOVE TYPY

// string
console.log(typeof 'abc');
console.log(typeof "abc");

// number
console.log(typeof 42);
console.log(typeof 3.14);

// boolean
console.log(typeof true);
console.log(typeof false);

// undefined
let v;
console.log(v); // hodnota je undefined
console.log(typeof v); // je typu undefined

// DATOVE STRUKTURY

let p = [3, -1, 0, 15, 'abc', true, 2.5, undefined]
// indexy   0   1  2   3     4      5    6          7

console.log(p); // pole lze vypisovat naraz
console.log(p[0]); // pole je indexovane od nuly
p[8] = 415; // hodnoty lze do pole dynamicky pridavat
console.log(p);

let o = {krestni: 'Jakub', prijmeni: 'Šenkýř'};

console.log(o); // cely objekt najednou
console.log(o['krestni']); // pristup "jako u pole"
console.log(o.krestni); // pristup pres tecku

o.povolani = 'učitel'; // objekty lze dynamicky doplnovat
console.log(o);

// protoze muzeme do promennych ukladat funkce...
let f = function() {
    console.log('Já jsem funkce.');
};

f();

// ...mame moznost do objektu pridavat metody
o.predstavSe = function() {
    console.log('Jmenuji se ' + this.krestni + ' ' + this.prijmeni + ' a pracuji jako ' + this.povolani + '.');
};

o.predstavSe();

console.log(o);

// "sipkovy" zapis funkci
let secti = (a, b) => {return a + b};

// je totez jako
/*
function secti(a, b) {
    return a + b;
}
*/

console.log(secti(1, 2));

// RIDICI STRUKTURY

x = Math.round(Math.random() * 200 - 100);

// if funguje klasicky jako v C#
if(x < 0) {
    console.log(x + ' je záporné');
} else if(x > 0) {
    console.log(x + ' je kladné');
} else {
    console.log(x + ' je nulové');
}

// do-while funguje klasicky jako v C#
do {
    console.log(x);
    x++;
} while (x < 0);

// while funguje klasicky jako v C#
while(x > 0) {
    console.log(x);
    x--;
}

// for ma tri ruzne tvary
let vystup = '';
for(let i = 0; i < 10; i++) {
    vystup += ' ' + i;
}
console.log(vystup);

// for-of pro prochazeni poli
for(let polozka of p) {
    console.log(polozka);
}

// for-in pro prochazeni poli a objektu
for(let klic in p) {
    console.log(klic + ': ' + p[klic]);
}
for(let klic in o) {
    console.log(klic + ': ' + o[klic]);
}

