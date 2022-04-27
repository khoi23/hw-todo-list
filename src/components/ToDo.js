import React from 'react'

function ToDo(props) {


    return (
        // <div className="card">
        //     <div className="name">Id: {props.id}</div>
        //     <div className="age">Todolist: {props.text}</div>
        // </div>
        <div className='list'>
            <label class="list-container">
                <input type="checkbox" name="checkbox"></input>
                <span class="checkmark"></span>{props.text}
            </label>
        </div>
    )
}

export default ToDo