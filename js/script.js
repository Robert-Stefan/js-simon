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


/**
 * Generare 5 numeri univoci casualmente
 */
while(numberList.length < size) {
    var number = getRandomNumber(1, 100);

    //Check unique number on list
    if(! numberList.includes(number)) {
        numberList.push(number);
    } 

}
console.log(numberList);
display = alert('I numeri da ricordare sono: ' + numberList);

//FUNCTION 30 SEC. 
setTimeout(function(){

    
    for(i = 0; i < 5; i++) {
    utente = parseInt(prompt('Inserisci i numeri che hai visto precedentemente: '));
    numeriutente.push(utente);
    } 
    
    console.log (numeriutente);

    if (numberList.includes(utente) ) {
        console.log('Complimenti hai indovinato tutti i numeri!!!');
    } else {
        
        console.log('Peccato hai indovinato solo ' + numeriuguali() );
    }

}, 3000)




/**
 * FUNCTIONS
 */

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function numeriuguali(numeriutente) {
    if (numeriutente === numberList.includes() ) {
        console.log(numeriutente);
    }
}
 });