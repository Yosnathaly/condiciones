function cambioColorBorde() {
    let uno = document.querySelector('#imagencasa')
    if(uno.style.borderColor !== 'red'){
        uno.style.border = '2px solid red'
    }
    else{
        uno.style.border = '0px solid'
    }
    
}