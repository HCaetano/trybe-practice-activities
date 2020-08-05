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


sendButton.addEventListener('click', function (event) {
  event.preventDefault();
  const date = startDate.value;
  const div = document.createElement('div');
  let content = 'Name: ' + document.querySelector('#name').value;
  content = content.concat('\nEmail: ' + document.querySelector('#email').value);
  content = content.concat('\nCPF: ' + document.querySelector('#cpf').value);
  content = content.concat('\nAddress: ' + document.querySelector('#address').value);
  content = content.concat('\nCity: ' + document.querySelector('#city').value);
  content = content.concat('\nState: ' + state.innerText);

  if (document.querySelectorAll('input[name="residency"]')[0].checked) {
    residency = document.querySelectorAll('input[name="residency"]')[0].value;
  } else {
    residency = document.querySelectorAll('input[name="residency"]')[1].value;
  }

  content = content.concat('\nResidency type: ' + residency);
  content = content.concat('\nLast employment summary: ' + document.querySelector('#summary').value);
  content = content.concat('\nPosition: ' + document.querySelector('#position').value);
  content = content.concat('\nStart date: ' + date);

  div.innerText = content;
  body.appendChild(div);
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