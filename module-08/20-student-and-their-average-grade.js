    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage() {
  const averages = [];
  
  notas.forEach(studentGrades => {
    const averageForCurrentStudent = studentGrades.reduce((acc, curr) => acc + curr) / studentGrades.length;
    averages.push(averageForCurrentStudent);
  })

  const studentObjects = alunos
    .map((aluno, index) => ({ name: aluno, average: averages[index] }))

  return studentObjects;
}

assert.deepStrictEqual(studentAverage(), expected);