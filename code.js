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
    
    if (cardHolderName.value.length != 0 && cardNumber.value.length == 19 && month.value.length == 2 && Number(month.value) >=1 && Number(month.value) <= 12 && year.value.length == 2 && year.value >= data && cvc.value.length == 3) {
        let form = document.querySelector ("#containerWhite")
        let complete = document.querySelector("#completeState")
        form.style.display = "none";
        complete.style.display = "block";
        yourNameTXT.innerHTML = `${(cardHolderName.value).toUpperCase()}`
        numberCardTXT.innerHTML = `${(cardNumber.value)}`
        mmCardTXT.innerHTML = `${(month.value).toUpperCase()}`
        yyCardTXT.innerHTML = `${(year.value).toUpperCase()}`
        cvcCardTXT.innerHTML = `${(cvc.value).toUpperCase()}`
    } else {
      window.alert ("[Don't forget to check your data] \n - Month must be between 1 and 12 \n - Year cannot be less than the current year")
      checkInputs ()
      var intervalo = setInterval (checkInputs, 500) 
    }
}
    
function buttonContinue () {
    location.reload()
  }

              /* Alerts Config */

function checkInputs () {
  const cardHolderNameValue = cardHolderName.value
  const cardNumberValue = cardNumber.value
  const monthValue = month.value
  const yearValue = year.value
  const cvcValue = cvc.value

  if (cardHolderNameValue === "") {
    setErrorFor (cardHolderName, "No blank spaces")
  } else {
    setSuccessFor (cardHolderName)
  }

  if ((cardNumberValue).length == 0) {
    setErrorFor (cardNumber, "No blank spaces &nbsp&nbsp&nbsp&nbsp&nbsp Must have 16 digits")
  } else if ((cardNumberValue).length != 19 && (cardNumberValue).length != 0) {
    setErrorFor (cardNumber, "Must have 16 digits")
  } else {
    setSuccessFor (cardNumber)
  }

  if ((monthValue).length != 2) {
    setErrorFor (month, "Must have 2 digits")
  } else {
    setSuccessFor (month)
  } 

  if ((yearValue).length != 2) {
    setErrorFor (year , "Must have 2 digits")
  } else {
    setSuccessFor (year)
  }

  if ((cvcValue).length != 3) {
    setErrorFor (cvc, "Must have 3 digits")
  } else {
    setSuccessFor (cvc)
  }
}

function setErrorFor (input, message) {
  const formControl = input.parentNode
  const alert = formControl.querySelector(".alerts")
  alert.innerHTML = message
  formControl.classList.remove("form-control") 
  formControl.classList.remove("form-control_success")
  formControl.classList.add("form-control_error")
}

function setSuccessFor (input) {
  const formControl = input.parentNode
  const alert = formControl.querySelector(".alerts")
  formControl.classList.remove("form-control")
  formControl.classList.remove("form-control_error")
  formControl.classList.add("form-control_success")
}

              /* Number Card formatting */

cardNumber.addEventListener('keypress', () => {
  let cardNumberLength = cardNumber.value.length

  if (cardNumberLength === 4 || cardNumberLength === 9 || cardNumberLength === 14) {
    cardNumber.value += ' '
  }
})

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