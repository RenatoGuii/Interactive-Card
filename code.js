/*AJEITAR PARA QUE SÓ RECEBA LETRAS NO PRIMEIRO INPUT*/ 
let cardHolderName = document.querySelector("#cardHolderTxt")
let cardNumber = document.querySelector("#cardNumberTxt")
let month = document.querySelector("#mm")
let year = document.querySelector("#yy")
let cvc = document.querySelector("#cvcNumber")


function buttonConfirm () {
    let alertDate = document.querySelector ("#alertDateTxt")
    if (cardHolderName.value.length != 0 && cardNumber.length != 0 && Number(cardNumber.value) > 0 && month.value.length != 0 && year.value.length != 0 && cvc.value.length != 0) {
        let form = document.querySelector ("#containerWhite")
        let complete = document.querySelector("#completeState")
        form.style.display = "none";
        complete.style.display = "block";
    } else {
         
        window.alert ("[ERRO] Check your data!")
    }
}

function buttonContinue () {
    let form = document.querySelector ("#containerWhite")
    let complete = document.querySelector("#completeState")
    form.style.display = "block";
    complete.style.display = "none";
    cardHolderName.value = null
    cardNumber.value = null
    month.value = null
    year.value = null
    cvc.value = null
}