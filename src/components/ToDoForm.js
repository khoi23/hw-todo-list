import React from 'react';

function ToDoForm() {
  return (
    <form className='todo-form'>
        <input 
            type='text'
            placeholder='Add To do...'
            className='todo-input'
        >
        </input>
    </form>
  )
}

export default ToDoForm