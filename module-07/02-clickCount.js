const clickMeButton = document.querySelector('button');
const numberOfClicksInput = document.querySelector('input');
let numberOfClicks = 0;

clickMeButton.addEventListener('click', function () {
  numberOfClicks += 1;
  numberOfClicksInput.value = numberOfClicks;
})
