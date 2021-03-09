// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

var bombsArray = [];
console.log(bombsArray);
var numeriSafe = [];
// var maxNum = 100;

var difficulty = parseInt(prompt('Imposta la difficoltà, premi 0 per facile, 1 per medio, 2 per difficile'))
switch (difficulty) {
  case 0:
  var maxNum = 100;
    break;
  case 1:
  var maxNum = 80;
    break;
  case 2:
  var maxNum = 50;
    break;
  default:

}




bombsArray = bombs(bombsArray, maxNum);

var punteggio = gioco(bombsArray, numeriSafe, maxNum);

console.log('RIP sei esploso');
console.log('Il tuo punteggio è: '+ punteggio);



function bombs(bombsArray, maxNum) {
  while (bombsArray.length < 16) {
    var numero = numeroRandom(1, maxNum);

    if (!bombsArray.includes(numero)) {
      bombsArray.push(numero);
    }
  }
  return bombsArray;
}

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function gioco(bombsArray, numeriSafe, maxNum) {
  while (numeriSafe.length < maxNum - 16) {
    var selezioneUtente = parseInt(prompt('Scrivi un numero, attento a non esplodere: '));

    if (!isNaN(selezioneUtente) && 1 <= selezioneUtente && selezioneUtente <= 100 && !numeriSafe.includes(selezioneUtente) ) {
      if (!bombsArray.includes(selezioneUtente)) {
        numeriSafe.push(selezioneUtente);
        console.log(selezioneUtente);
      } else {
        return numeriSafe.length;
      }
    }
  }
}
