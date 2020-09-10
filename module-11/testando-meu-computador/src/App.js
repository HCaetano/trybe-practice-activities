import React from 'react';
import Components from './Components'
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Study React', `Listen to 'The xx'`, 'Clean my room', `Watch 'The Boys'`];

function App() {
  return (
    <div>
      <Components />
      {
        taskList.map(taskDescription => task(taskDescription))
      }
    </div>
  );
}

export default App;
