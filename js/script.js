document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const continueButton = document.getElementById('continue');
  const name = document.getElementById('name');
  const number = document.getElementById('number');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const cvc = document.getElementById('cvc');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const changeCard = addCard();
    if(changeCard.validate == 1) {
      form.classList.add('hidden');
      showSuccess();
      name.innerText = changeCard.cardName.value;
      number.innerText = changeCard.numberCard.value
      month.innerText = changeCard.monthDate.value;
      year.innerText = changeCard.yearDate.value;
      cvc.innerText = changeCard.cvcCard.value;
    }
  })

  continueButton.addEventListener('click', function() {
    window.location.reload();
  })
})

const addCard = function() {
  const inputField = document.getElementsByTagName('input');
  const cardName = document.getElementById('cardholderName');
  const numberCard = document.getElementById('cardNumber');
  const monthDate = document.getElementById('expDateMonth');
  const yearDate = document.getElementById('expDateYear');
  const cvcCard = document.getElementById('cvcCard');
  const errorMsg = document.getElementsByClassName('error-message');

  let validate = 1;

  for(const error of errorMsg) {
    error.innerHTML = "";
  }

  for(const input of inputField) {
    input.classList.remove('error-input');
  }

  if(!cardName.value) {
    errorMsg[0].innerHTML = "Can't be blank";
    inputField[0].classList.add('error-input');
    validate = -1;
  }

  if(!numberCard.value) {
    errorMsg[1].innerHTML = "Can't be blank";
    inputField[1].classList.add('error-input');
    validate = -1;
  }else if(isNaN(numberCard.value)) {
    errorMsg[1].innerHTML = "Wrong format, numbers only";
    inputField[1].classList.add('error-input');
    validate = -1;
  }else if(numberCard.value.length !== 16) {
    errorMsg[1].innerHTML = "It must be 16 character";
    inputField[1].classList.add('error-input');
    validate = -1;
  }

  if(!monthDate.value) {
    errorMsg[2].innerHTML = "Can't be blank";
    inputField[2].classList.add('error-input');
    validate = -1;
  }else if(isNaN(monthDate.value)) {
    errorMsg[2].innerHTML = "Wrong format, numbers only";
    inputField[2].classList.add('error-input');
    validate = -1;
  }else if(monthDate.value.length !== 2) {
    errorMsg[2].innerHTML = "Must be 2 character";
    inputField[2].classList.add('error-input');
    validate = -1;
  }

  if(!yearDate.value) {
    errorMsg[2].innerHTML = "Can't be blank";
    inputField[3].classList.add('error-input');
    validate = -1;
  }else if(isNaN(yearDate.value)) {
    errorMsg[2].innerHTML = "Wrong format, numbers only";
    inputField[3].classList.add('error-input');
    validate = -1;
  }else if(yearDate.value.length !== 2) {
    errorMsg[2].innerHTML = "Must be 2 character";
    inputField[3].classList.add('error-input');
    validate = -1;
  }

  if(!cvcCard.value) {
    errorMsg[3].innerHTML = "Can't be blank";
    inputField[4].classList.add('error-input');
    validate = -1;
  }else if(isNaN(cvcCard.value)) {
    errorMsg[3].innerHTML = "Wrong format, numbers only";
    inputField[4].classList.add('error-input');
    validate = -1;
  }else if(cvcCard.value.length !== 3) {
    errorMsg[3].innerHTML = "Must be 3 character";
    inputField[4].classList.add('error-input');
    validate = -1;
  }

  return {
    validate,
    cardName,
    numberCard,
    monthDate,
    yearDate,
    cvcCard
  };
}

function showSuccess() {
  const success = document.querySelector('.complete-state');
  success.classList.remove('complete-state');
  success.classList.add('success-state');
}

const RENDER_CARD = "render-card";