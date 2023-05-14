const buttons = document.querySelectorAll('.tip-button');
const inputs = document.querySelectorAll('input');
const billInputField = document.querySelector('.bill-input-field');
const tipAmountField = document.querySelector('#tip-amount');
const personInputField = document.querySelector('.number-of-people-input');

function calculateTip() {
    const bill = parseFloat(billInputField.value);
    const tip = parseFloat(this.value);
    const numberOfPeople = parseFloat(personInputField.value);

    if (isNaN(bill) || isNaN(tip) || isNaN(numberOfPeople)) {
        tipAmountField.value = '';
        return;
    }

    const tipAmount = (bill * tip) / numberOfPeople;
    tipAmountField.value = tipAmount.toFixed(2);
}

inputs.forEach(input => input.addEventListener('input', calculateTip));
buttons.forEach(button => button.addEventListener('click', calculateTip));
