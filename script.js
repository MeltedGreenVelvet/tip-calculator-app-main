const tipButtons = document.querySelectorAll('.tip-button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const resetButton = document.querySelector('.reset-btn');

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const radioBtn = button.previousElementSibling;
    if (radioBtn) {
      radioBtn.checked = true;
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
      }
    });
  });
  
  resetButton.addEventListener('click', () => {
    tipButtons.forEach(tipButton => {
      tipButton.classList.remove('checked');
    });
  });