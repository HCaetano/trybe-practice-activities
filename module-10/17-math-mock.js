const sum = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

module.exports = { sum, subtraction, multiplication, division };