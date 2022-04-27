import React from 'react'

function ToDoSum(props) {
  return (
    <div className='todosum'>
        <div className='right'>{props.sum} task left!!!</div>
        <div className='right'>Mindx Todolist</div>
    </div>
  )
}

export default ToDoSum