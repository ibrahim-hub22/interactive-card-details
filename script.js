document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('card-form');

  const nameInput = document.getElementById('cardholder-name');
  const numberInput = document.getElementById('card-number');
  const monthInput = document.getElementById('exp-month');
  const yearInput = document.getElementById('exp-year');
  const cvcInput = document.getElementById('cvc');

  const nameError = document.getElementById('name-error');
  const numberError = document.getElementById('number-error');
  const expiryError = document.getElementById('expiry-error');
  const cvcError = document.getElementById('cvc-error');





const cardNumberDisplay = document.querySelector('.card-number');
const cardNameDisplay = document.querySelector('.card-name');
const cardExpiryDisplay = document.querySelector('.card-expiry');
const cardCvcDisplay = document.querySelector('.card-cvc');

nameInput.addEventListener('input', () => {
  cardNameDisplay.textContent = nameInput.value || 'Jane Appleseed';
});

numberInput.addEventListener('input', () => {
  let formatted = numberInput.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  numberInput.value = formatted;
  cardNumberDisplay.textContent = formatted || '0000 0000 0000 0000';
});

monthInput.addEventListener('input', updateExpiry);
yearInput.addEventListener('input', updateExpiry);

function updateExpiry() {
  const mm = monthInput.value || '00';
  const yy = yearInput.value || '00';
  cardExpiryDisplay.textContent = `${mm}/${yy}`;
}

cvcInput.addEventListener('input', () => {
  cardCvcDisplay.textContent = cvcInput.value || '000';
});
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let hasError = false;

    // Clear all previous errors
    [nameError, numberError, expiryError, cvcError].forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });

    // Validate name
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      nameError.style.display = 'block';
      hasError = true;
    }

    // Validate card number
    const cardRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!cardRegex.test(numberInput.value.trim())) {
      numberError.textContent = 'Enter a valid card number';
      numberError.style.display = 'block';
      hasError = true;
    }

    // Validate expiry date
    if (!/^\d{2}$/.test(monthInput.value.trim()) || !/^\d{2}$/.test(yearInput.value.trim())) {
      expiryError.textContent = 'Enter a valid expiry date';
      expiryError.style.display = 'block';
      hasError = true;
    }

    // Validate CVC
    if (!/^\d{3}$/.test(cvcInput.value.trim())) {
      cvcError.textContent = 'Enter a valid CVC';
      cvcError.style.display = 'block';
      hasError = true;
    }

    // Final success
    if (!hasError) {
      alert('✅ THANK YOU!');
      form.reset();

      // You can also reset the card preview here if needed
    }
  });
});
