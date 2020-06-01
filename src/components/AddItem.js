import React, { useState } from 'react'

function AddItem(props) {
    const [newTodo, setNewTodo] = useState("")

    function newInput(event) {
        setNewTodo(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (newTodo.length > 0) {
            props.addTodo(newTodo)
        }
        setNewTodo("")
    }

    return (
        <div className="add-item">
            <h2>Add Todo</h2>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" onChange={newInput} value={newTodo} />
                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default AddItem