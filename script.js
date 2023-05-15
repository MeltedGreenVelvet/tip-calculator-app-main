const tipButtons = document.querySelectorAll('.tip-button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const resetButton = document.querySelector('.reset-btn');
const billInput = document.getElementById('bill');
const numberOfPeopleInput = document.getElementById('people');
const tipAmountInput = document.getElementById('tip-amount');
const totalAmountInput = document.getElementById('total');

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const radioBtn = button.previousElementSibling;
    if (radioBtn) {
      radioBtn.checked = true;
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
  const selectedTipButton = document.querySelector('input[type="radio"]:checked');

  if (!isNaN(billValue) && !isNaN(numberOfPeopleValue) && selectedTipButton) {
    const tipPercentage = parseFloat(selectedTipButton.value);
    const tipAmount = (billValue * tipPercentage) / numberOfPeopleValue;
    const totalAmount = billValue * tipPercentage;
    const totalPerPerson = (billValue + totalAmount) / numberOfPeopleValue;

    tipAmountInput.value = tipAmount.toFixed(2);
    totalAmountInput.value = totalPerPerson.toFixed(2);
  }
}

billInput.addEventListener('input', calculateTip);
numberOfPeopleInput.addEventListener('input', calculateTip);

resetButton.addEventListener('click', () => {
  tipButtons.forEach(tipButton => {
    tipButton.classList.remove('checked');
  });
  tipAmountInput.value = '';
  totalAmountInput.value = '';
});
