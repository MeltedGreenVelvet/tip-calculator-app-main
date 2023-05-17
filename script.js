const tipButtons = document.querySelectorAll('.tip-button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const resetButton = document.querySelector('.reset-btn');
const billInput = document.getElementById('bill');
const numberOfPeopleInput = document.getElementById('people');
const tipAmountInput = document.getElementById('tip-amount');
const totalAmountInput = document.getElementById('total');
const customInput = document.getElementById('custom-input');

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const radioBtn = button.querySelector('input[type="radio"]');
    if (radioBtn) {
      radioBtn.checked = true;
      calculateTip();
    } else if (button === customInput.parentElement) {
      calculateTip();
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
      calculateTip();
    }
  });
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

      tipAmountInput.value = tipAmount.toFixed(2);
      totalAmountInput.value = totalPerPerson.toFixed(2);
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
});
