console.log('*** 1 ***');

let info = {
  character: "Daisy",
  origin: "Donald Duck",
  about: "Comic book character Donald Duck's girlfriend",
};

console.log(`Welcome, ${info.character}`);

console.log('\n*** 2 ***');
info.recurring = "Yes";

console.log('\n*** 3 ***');
for (const key in info) {
  console.log(key);
}

console.log('\n*** 4 ***');
for (const key in info) {
    console.log(info[key]);
}

console.log('\n*** 5 ***');
let scrooge = {
  character: "Scrooge McDuck",
  origin: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  about: "The last McDuck",
  recurring: "Yes",
}

for (const key in info) {
  if (key === 'recurring') {
    console.log('Yes');
  } else {
    console.log(`${info[key]} and ${scrooge[key]}`);
  }
}