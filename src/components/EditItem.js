import React, { useState, useEffect } from 'react'

function EditItem(props) {
    const [newTodo, setNewTodo] = useState("")
    useEffect(() => {
        setNewTodo(props.currentTodo)
      }, []);


    function newInput(event) {
        setNewTodo(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (newTodo.length > 0) {
            props.updateTodo(newTodo)
        }
        setNewTodo("")
    }

    return (
        <div className="add-item">
            <h2>Edit Todo</h2>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" onChange={newInput} value={newTodo} />
                <input className="btn btn-secondary" type="submit" value="Update" />

            </form>
        </div>
    )
}

export default EditItem