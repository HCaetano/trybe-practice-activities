exports.randomNumber = () => Math.round(Math.random() * 100);

exports.isDivisible = function(number) {
  return (this.randomNumber() % number) === 0;
}