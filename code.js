let cardHolderName = document.querySelector("#cardHolderTxt")
let cardNumber = document.querySelector("#cardNumberTxt")
let month = document.querySelector("#mm")
let year = document.querySelector("#yy")
let cvc = document.querySelector("#cvcNumber")
let yourNameTXT = document.querySelector ("#yourName")
let numberCardTXT = document.querySelector ("#cardNumberToJS")
let mmCardTXT = document.querySelector ("#expDateMM")
let yyCardTXT = document.querySelector ("#expDateYY")
let cvcCardTXT = document.querySelector ("#cvcCard")


function buttonConfirm () {
    data = new Date().getFullYear().toString().substr(-2);
    
    if (cardHolderName.value.length != 0 && cardNumber.value.length == 16 && Number(cardNumber.value) > 0 && month.value.length == 2 && Number(month.value) >=1 && Number(month.value) <= 12 && year.value.length == 2 && year.value >= data && cvc.value.length == 3) {
        let form = document.querySelector ("#containerWhite")
        let complete = document.querySelector("#completeState")
        let bridgeNumberCard = (cardNumber.value).replace(/.{4}/g, '$& ');
        let finalNumberCard = bridgeNumberCard.substring(0, bridgeNumberCard.length - 1);
        form.style.display = "none";
        complete.style.display = "block";
        yourNameTXT.innerHTML = `${(cardHolderName.value).toUpperCase()}`
        numberCardTXT.innerHTML = `${(finalNumberCard)}`
        mmCardTXT.innerHTML = `${(month.value).toUpperCase()}`
        yyCardTXT.innerHTML = `${(year.value).toUpperCase()}`
        cvcCardTXT.innerHTML = `${(cvc.value).toUpperCase()}`
        console.log (resultNumberCard.value)
    } else {
        window.alert (" [ERRO] Check your data! \n - No blank spaces allowed \n - Card Number must be 16 digits \n - Month and Year must be 2 digits \n - CVC must be 3 digits ")
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
    yourNameTXT.innerHTML = "YOUR NAME"
    numberCardTXT.innerHTML = "0000 0000 0000 0000"
    mmCardTXT.innerHTML = "00"
    yyCardTXT.innerHTML = "00"
    cvcCardTXT.innerHTML = "000"
}


/*Digits limitation*/ 

cardHolderName.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

cardNumber.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}

month.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}

year.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}

cvc.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}