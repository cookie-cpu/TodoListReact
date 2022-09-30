import React from 'react'

export default function Todo({ text, todos, setTodos, todo }) {

  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.key !== todo.key))
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.key === todo.key) {
        return {
          ...item, completed: !item.completed
        }
      };
      return item;
    }))
  };

  return (
    <div className='todo'>
    {/* adds a complete flag to alter the css if the task is completed */}
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>

        <button className='complete-btn' onClick={completeHandler}>✓
          <i className='fas fa-check'></i>
      </button>

      <button className='trash-btn' onClick={deleteHandler}>🗑
        <i className='fas fa-trash'></i>
      </button>

    </div>
  )
}
