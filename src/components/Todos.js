import React from 'react'
import Todo from './Todo'

function Todos(props) {
    return (
        <>
        {props.todos.map((todo,i)=> {
            return(
            <ul key={i}>
                <Todo key={i} index={i} todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
             </ul>
            )
        })}
        </>
    )
}

export default Todos
