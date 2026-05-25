import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([
    'Task1',
    'Task2',
    'Task3'
  ]);

  const [taskDescription, setTaskDescription] = useState('');

  function handleInputChange(event) {
    setTaskDescription(event.target.value);
  }

  function handleAddTask() {
    if (taskDescription.trim() !== '') {
      setTodos([...todos, taskDescription]);
      setTaskDescription('');
    }
  }

  function handleDeleteTask(indexToDelete) {
    const updatedTodos = todos.filter((todo, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-container">
      <h1>ToDo List App</h1>

      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={handleInputChange}
      />

      <button className="add-button" onClick={handleAddTask}>
        Add Task
      </button>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;