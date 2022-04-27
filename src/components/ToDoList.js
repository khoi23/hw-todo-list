import React from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import ToDoSum from './ToDoSum';

function ToDoList() {
  const todoList = [
      {
        id: '1',
        text: 'Clean',
      },
      {
        id: '2',
        text: 'Clean ons',
      },
      {
        id: '2',
        text: 'Clean ons',
      },
      {
        id: '2',
        text: 'Clean ons',
      },
  ]

  let sum = todoList.length;

  return (
    <div className='container'>
        <h1>To Do List</h1>
        <ToDoForm />
        {
          todoList.map((element, index) => {
            return <ToDo key={index} text={element.text}/>
          })
        }
        
        <ToDoSum sum={sum}/>
        
    </div>
  )
}

export default ToDoList