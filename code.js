              /* Inputs */

let cardHolderName = document.querySelector("#cardHolderTxt")
let cardNumber = document.querySelector("#cardNumberTxt")
let month = document.querySelector("#mm")
let year = document.querySelector("#yy")
let cvc = document.querySelector("#cvcNumber")

              /* Card Texts */

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
        checkInputs ()
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

              /* Alerts Config */

function checkInputs () {
  let cardHolderNameValue = cardHolderName.value
  let cardNumberValue = cardNumber.value
  let monthValue = month.value
  let yearValue = year.value
  let cvcValue = cvc.value

  if (cardHolderNameValue === "") {
    setErrorFor (cardHolderName, "No blank spaces")
  }

  if ((cardNumberValue).length == 0) {
    setErrorFor (cardNumber, "No blank spaces &nbsp&nbsp&nbsp&nbsp&nbsp Must have 16 digits")
  } else if ((cardNumberValue).length != 16 && (cardNumberValue).length != 0) {
    setErrorFor (cardNumber, "Must have 16 digits")
  }

  if ((monthValue).length == 0) {
    setErrorFor (month, "Must have 2 digits")
  }

  if ((yearValue).length == 0) {
    setErrorFor (year , "Must have 2 digits")
  }

  if ((cvcValue).length == 0) {
    setErrorFor (cvc, "Must have 3 digits")
  }
}

function setErrorFor (input, message) {
    let formControl = input.parentNode

    if (input == month || input == year) {
      let alertDate = document.querySelector("#alertDate")
      alertDate.innerHTML = message
    } else {
    const alert = formControl.querySelector(".alerts")
      alert.innerHTML = message
    }

    formControl.classList.remove("form-control") 
    formControl.classList.add("form-control_error")
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