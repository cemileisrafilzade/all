import React, { useState } from 'react';

export const ToDoList = () => {
    const [todos, setTodos] = useState(['Buy milk', 'Do something more']);
    const [inputValue, setInputValue] = useState('');

    const handleInputBlur = (e) => {
        setInputValue(e.target.value);
    }

    const addTodo = () => {
        setTodos(todos => [...todos, inputValue]);
    }

    return (
        <div>
            <input type="text" onBlur={handleInputBlur} />
            <button onClick={addTodo}>ADD</button>
            <ol>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}