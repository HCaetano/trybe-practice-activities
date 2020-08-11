const lesson1 = {
  subject: 'Math',
  numberOfStudents: 20,
  professor: 'Maria Clara',
  shift: 'morning',
};

const lesson2 = {
  subject: 'History',
  numberOfStudents: 20,
  professor: 'Carlos',
};

const lesson3 = {
  subject: 'Math',
  numberOfStudents: 10,
  professor: 'Maria Clara',
  shift: 'evening',
};

// 1
const addShiftToLesson = (lesson, propName, propValue) => {
  lesson[propName] = propValue;
};

addShiftToLesson(lesson2, 'shift', 'Morning')
// console.log(lesson2);

// 2
const listObjectKeys = (object) => {
  return Object.keys(object);
}

// console.log(listObjectKeys(lesson2));

// 3
const objectSize = (object) => { 
  return Object.keys(object).length;
};

// console.log(objectSize(lesson2));

// 4
const listObjectValues = (object) => {
  return Object.values(object);
}

// console.log(listObjectValues(lesson2));

// 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);