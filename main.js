// console.log('javascript collegato');

// per allenarmi con questi elementi di js provo a pushare il link dentro l img

const lampImg = document.querySelector('img')
console.log(lampImg);

lampImg.src = './img/white_lamp.png'

const onOffButton = document.querySelector('button')
console.log(onOffButton);

onOffButton.addEventListener('click', function () {
    onOffButton.innerHTML = 'Spegni'
    lampImg.src = './img/yellow_lamp.png'
})