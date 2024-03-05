/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberOne = 7;
let numberTwo = 11;
console.log(Math.max(numberOne, numberTwo));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberControl = 6;
if (numberControl === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberDivisible = 25;

if (numberDivisible % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 8;
let y = 16;
if (x === 8 || y - x === 8) {
  console.log("il risultato è 8");
} else {
  console.log("il risultato non è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;
if (totalShoppingCart > 50) {
  console.log("spedizione gratis");
} else {
  console.log("spese di spedizione 10 euro");
}
let totalShoppingCart2 = 70;
if (totalShoppingCart2 > 50) {
  console.log("spedizione gratis");
} else {
  console.log("spese di spedizione 10 euro");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let carrello = 50;
let percentualeSconto = 20;
let scontoInEuro;
if (carrello > 50) {
  console.log("spedizione gratis");
  scontoInEuro = (carrello * percentualeSconto) / 100;
  console.log(carrello - scontoInEuro);
} else {
  console.log("spese di spedizione 10 euro");
  scontoInEuro = (carrello * percentualeSconto) / 100;
  console.log(carrello - scontoInEuro);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primo = 9;
let secondo = 4;
let terzo = 6;
let valoriNumerici = [];
valoriNumerici.push(primo, secondo, terzo);
valoriNumerici = valoriNumerici.sort();
let min = valoriNumerici[0];
let mid = valoriNumerici[1];
let max = valoriNumerici[2];
console.log(min);
console.log(mid);
console.log(max);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 89;
console.log(typeof valore);

let nonValoreNumerico = "89";
console.log(typeof nonValoreNumerico);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let controllo = 20 % 2;
if (controllo == 0) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

let controllo2 = 15 % 2;
if (controllo2 == 0) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 */
let val1 = 7;
if (val1 < 10 && val1 > 5) {
  console.log("Meno di 10");
} else if (val1 < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

let val2 = 3;
if (val2 < 10 && val2 > 5) {
  console.log("Meno di 10");
} else if (val2 < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

let val3 = 15;
if (val3 < 10 && val3 > 5) {
  console.log("Meno di 10");
} else if (val3 < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const vuoto = [];
vuoto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(vuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
vuoto.splice(9, 1, 100);
console.log(vuoto);
