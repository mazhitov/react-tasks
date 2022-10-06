import React from 'react';
import './App.css';
import Task1 from './task1/task1';
import Task2 from './task2/task2';
import Task3 from './task3/task3';
import Task4 from './task4/task4';
import Task5 from './task5/task5';

function App() {
  return (
    <div  className={'container'}>
        <h3>Tasks</h3>
        <p>Open console of browser to see a result</p>
        {/*<Task1/>*/}
        {/*<Task2/>*/}
        {/*<Task3/>*/}
        <Task4/>
        {/*<Task5/>*/}
    </div>
  );
}

export default App;
