const tipButtons = document.querySelectorAll('.tip-button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const resetButton = document.querySelector('.reset-btn');
const billInput = document.getElementById('bill');
const numberOfPeopleInput = document.getElementById('people');
const tipAmountInput = document.getElementById('tip-amount');
const totalAmountInput = document.getElementById('total');
const customInput = document.getElementById('custom-input');
const billError = document.querySelector('.bill-error');
const peopleError = document.querySelector('.people-error');


tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const radioBtn = button.querySelector('input[type="radio"]');
    if (radioBtn) {
      radioBtn.checked = true;
      if ((!billError.style.display || billError.style.display === 'none') && (!peopleError.style.display || peopleError.style.display === 'none')) {
        calculateTip();
      }
    } else if (button === customInput.parentElement) {
      if ((!billError.style.display || billError.style.display === 'none') && (!peopleError.style.display || peopleError.style.display === 'none')) {
        calculateTip();
      }
    }
  });
});

function handleRadioButtonClick(index) {
  tipButtons.forEach((tipButton, buttonIndex) => {
    if (buttonIndex !== index) {
      tipButton.classList.remove('checked');
    }
  });
  tipButtons[index].classList.add('checked');
}

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('click', () => {
    if (radioButton.checked) {
      handleRadioButtonClick(index);
      if ((!billError.style.display || billError.style.display === 'none') && (!peopleError.style.display || peopleError.style.display === 'none')) {
        calculateTip();
      }
    }
  });
});

billInput.addEventListener('input', function() {
  if (billInput.value <= 0) {
    billError.style.display = 'inline';
  } else {
    billError.style.display = 'none';
  }
  
  if (billInput.value === '') {
    billError.style.display = 'none';
  }
});

numberOfPeopleInput.addEventListener('input', function() {
  if (numberOfPeopleInput.value <= 0) {
    peopleError.style.display = 'inline';
  } else {
    peopleError.style.display = 'none';
  }

  if (numberOfPeopleInput.value === '') {
    peopleError.style.display = 'none';
  }
});

function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const numberOfPeopleValue = parseInt(numberOfPeopleInput.value);
  const customTipPercentage = parseFloat(customInput.value);
  const selectedTipButton = document.querySelector('input[type="radio"]:checked');

  let tipPercentage, tipAmount, totalAmount, totalPerPerson;

  if (!isNaN(billValue) && !isNaN(numberOfPeopleValue)) {
    if (selectedTipButton) {
      tipPercentage = parseFloat(selectedTipButton.value);
    } else if (!isNaN(customTipPercentage)) {
      tipPercentage = customTipPercentage * 0.01; // Convert to percentage
    }

    if (tipPercentage) {
      tipAmount = (billValue * tipPercentage) / numberOfPeopleValue;
      totalAmount = billValue * tipPercentage;
      totalPerPerson = (billValue + totalAmount) / numberOfPeopleValue;

      if (isFinite(tipAmount)) {
        tipAmountInput.value = '$' + tipAmount.toFixed(2); // Add "$" sign
      } else {
        tipAmountInput.value = '';
      }

      if (isFinite(totalPerPerson)) {
        totalAmountInput.value = '$' + totalPerPerson.toFixed(2); // Add "$" sign
      } else {
        totalAmountInput.value = '';
      }
    }
  }
}

billInput.addEventListener('input', calculateTip);
numberOfPeopleInput.addEventListener('input', calculateTip);
customInput.addEventListener('input', () => {
  radioButtons.forEach(radioButton => {
    radioButton.checked = false;
    const label = radioButton.parentNode;
    label.classList.remove('checked');
  });
  calculateTip();
});

resetButton.addEventListener('click', () => {
  tipButtons.forEach(tipButton => {
    tipButton.classList.remove('checked');
  });
  customInput.value = '';
  tipAmountInput.value = '';
  totalAmountInput.value = '';
  billError.style.display = 'none';
});