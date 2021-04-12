/**
 * Descrizione
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

 $(document).ready(function() { 

var utente;
var numeriutente = [];
var size = 5;
var numberList = [];
var display;
var verifico = [];


/**
 * Generare 5 numeri univoci casualmente
 */

while(numberList.length < size) {
    var number = getRandomNumber(1, 100);

    //Check numero univoco
    if(! numberList.includes(number)) {
        numberList.push(number);
    } 

}

//Mostro i numeri
console.log(numberList);
display = alert('I numeri da ricordare sono: ' + numberList);

//FUNCTION 30 SEC. 
setTimeout(function(){

    //Inserisco numeri utente
    for(i = 0; i < 5; i++) {
    utente = parseInt(prompt('Inserisci i numeri che hai visto precedentemente: '));
    numeriutente.push(utente);
    } 
    console.log (numeriutente);

    //Verifico i numeri
    for( i = 0; i < numberList.length; i++) {

        if (numberList.includes(numeriutente[i]) ) {
            verifico.push(numeriutente[i]);
        } 
}

//OUTPUT
console.log('Hai indovinato ' + verifico.length + ' numeri su ' + numberList.length);
console.log('Hai indovinato i seguenti numeri: ' + verifico + '! ' + 'I numeri casuali erano: ' + numberList );
}, 30000)


/**
 * FUNCTIONS
 */

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

});