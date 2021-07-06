function checkIMC(imc) {
  if (imc <= 18.5) {
    console.log('You are underweight');
    return;
  } else if (imc <= 24.9) {
    console.log('You are of regular weight');
    return;
  } else if (imc <= 29.9) {
    console.log('You are overweight');
    return;
  } else if (imc <= 34.9) {
    console.log('You have level I obesity');
    return;
  } else if (imc <= 39.9) {
    console.log('You have level II obesity');
    return;
  } else {
    console.log('You have level III or IV obesity');
  }
}

module.exports = { checkIMC }; 