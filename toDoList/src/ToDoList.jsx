import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");

    function addToDo() {
        if (input.trim() === "") return;
        setToDos([...toDos, { text: input, completed: false }]);
        setInput("");
    }

    function toggleStatus(index) {
        setToDos(toDos.map((toDo, i) => 
            i === index ? { ...toDo, completed: !toDo.completed } : toDo
        ));
    }

    const deleteToDo = (index) => {
        setToDos(toDos.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <h1>To Do List</h1>
            <div className="toDoInput">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(event) => setInput(event.target.value)} 
                    placeholder="Enter a task..." 
                />
                <button onClick={addToDo}>Add Task</button>
            </div>
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index} className={toDo.completed ? "completed" : ""}>
                        <span onClick={() => toggleStatus(index)}>{toDo.text}</span>
                        <button className="delete-btn" onClick={() => deleteToDo(index)}>
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
