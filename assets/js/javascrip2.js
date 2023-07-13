function verificarStickers() {
    let elemento1 = document.querySelector('.input__uno')
    let elemento2 = document.querySelector('.input__dos')
    let elemento3 = document.querySelector('.input__tres')
    let parrafo = document.querySelector('p')
    if(elemento1.value < 0 || elemento2.value < 0 || elemento3.value < 0){
        alert('Los números deben ser iguales o mayores que cero')
        parrafo.innerHTML = 'Selecciona tus stickers'
    }
    else{
        let suma = Number(elemento1.value) + Number(elemento2.value) + Number(elemento3.value)
        if(suma > 10) {
         parrafo.innerHTML = 'Llevas demasiados stickers'
        }
        else if(suma === 1) {
         parrafo.innerHTML = 'LLevas ' + suma + ' sticker'
        }

        else
        {
            parrafo.innerHTML = 'LLevas ' + suma + ' stickers'
        }
    } 
}