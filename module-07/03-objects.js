// 1
const princess = {
  firstName: 'Ashe',
  age: 22,
  job: 'Princess',
};

const addNewPropsToObject = (object, propName, propValue) => {
  return object[propName] = propValue;
};

addNewPropsToObject(princess, 'lastName', 'Dalmasca');
// console.log(princess);

// 2
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const showSkillsAndLevels = (student) => {
  const skills = Object.keys(student)

  for (const i in skills) {
    console.log(`${skills[i]}, nível: ${student[skills[i]]}`);
  }
};

// showSkillsAndLevels(student2);
