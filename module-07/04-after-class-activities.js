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

// 6
const showStudentQuantity = (object) => {
  let numberOfStudents = 0;

  for (const lesson in allLessons) {
    numberOfStudents += allLessons[lesson].numberOfStudents;
  }

  return numberOfStudents;
};

// console.log(showStudentQuantity(allLessons));

// 7
const getValueByNumber = (object, position) => {
  return Object.values(object)[position];
};

// console.log(getValueByNumber(lesson1, 0));

// 8
const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  let isTrue = false;

  for (const i in entries) {
    if (entries[i][0] === key && entries[i][1] === value) {
      isTrue = true;
    }
  }

  return isTrue;
};

// console.log(verifyPair(lesson3, 'shift', 'evening'));
// console.log(verifyPair(lesson3, 'subject', 'Maria Clara'));