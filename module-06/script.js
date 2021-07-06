const sendButton = document.querySelector('#send-button');
const resetButton = document.querySelector('#reset-button');
const startDate = document.querySelector('#start-date');
const body = document.querySelector('body');
const select = document.querySelector('#state');
let state = 'Rio Grande do Sul';
let residency;

function errorMessage() {
  startDate.classList.add('error');

  setTimeout(() => {
    startDate.classList.remove('error');
  }, 5000);
}

select.addEventListener('change', function () {
  const listOfStates = select.options;

  for (var i = 0, len = listOfStates.length; i < len; i++) {
    if (listOfStates[i].selected === true) {
      state = listOfStates[i];
      break;
    }
  }
});

resetButton.addEventListener('click', function () {
  document.querySelector('form').reset();
  body.lastChild.innerText = '';
});

new JustValidate('.cv-form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    messages: {
      email: {
        required: 'You must type in an email',
        email: 'Typed email is invalid'
      }
    }
  }
});