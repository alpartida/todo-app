import React from 'react'

function Todo(props) {
    return (
        <li>
            {props.todo}
            <button onClick={()=>props.deleteTodo(props.todo)}className = "btn btn-danger btn-xs pull-right delete-button">X</button>
            <button onClick={()=>props.updateTodo(props.todo, props.index)}className = "btn btn-info btn-xs pull-right update-button">Update</button>
        </li>
    )
}

export default Todo