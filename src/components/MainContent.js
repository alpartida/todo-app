import React, { useState } from 'react';
import AddItem from './AddItem'
import EditItem from './EditItem'
import Todos from './Todos'


function MainContent() {
    const [todos, setTodos] = useState(["Item 1", "Item 2", "Item 3", "Item 4"])
    const [editing, setEditing] = useState(false)
    const [currentTodo, setCurrentTodo] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)

    function addTodo(todo) {
        setTodos([...todos, todo])
    }

    function editTodo(todoToUpdate, index) {
        setEditing(true)
        setCurrentTodo(todoToUpdate)
        setSelectedIndex(index)
        console.log(selectedIndex)
    }
    function updateTodo(todo){
        const arr = [...todos]
        console.log(arr)
        arr.splice(selectedIndex,1,todo)
        setTodos(arr)
        setEditing(false)
    }

    function deleteTodo(todoToDelete) {
        setTodos(todos.filter(todo => todo != todoToDelete))
    }
    return (
        <div>
            {editing ? <EditItem currentTodo={currentTodo} updateTodo={updateTodo}/> : <AddItem addTodo={addTodo} />}
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={editTodo} />
        </div>
    );
}

export default MainContent;