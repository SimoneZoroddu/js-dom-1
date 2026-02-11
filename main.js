// console.log('javascript collegato');

// per allenarmi con questi elementi di js provo a pushare il link dentro l img
// mi prendo dall html il tag img con query (che seleziona i tag come se fossi nel css), potei anche dare una classe o un id e prenderlo tramite getElementById (per ID) o getElementsByClassName (per le classi)
const lampImg = document.querySelector('img')
// controllo che funzioni
//console.log(lampImg);
// gli cambio l elemento src con l immagine situata nella cartella img lampadina spenta
lampImg.src = './img/white_lamp.png'
// seleziono il bottone come con l img
const onOffButton = document.querySelector('button')
// controllo che funzioni
//console.log(onOffButton);
// ci metto un testo dentro il bottone in questo caso 'Accendi'
onOffButton.innerHTML = 'Accendi'

//rendo il bottone cliccabile grazie al 'click' e gli do una funzione per dirgli cosa deve fare
onOffButton.addEventListener('click', function () {
    // gli dico che se il testo all interno del bottone e 'Accendi' cambia img e cambia testo altrimenti l opposto
    if (onOffButton.innerHTML == 'Accendi') {
        onOffButton.innerHTML = 'Spegni'
        lampImg.src = './img/yellow_lamp.png'
    } else {
        onOffButton.innerHTML = 'Accendi'
        lampImg.src = './img/white_lamp.png'
    }
})