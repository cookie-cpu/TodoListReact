import React from 'react'

export default function Todo({ text, todos, setTodos, todo }) {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.key !== todo.key))
    //console.log(todo)
  };

  return (
    <div className='todo'>
      <li className='todo-item'>{text}</li>
        <button className='complete-btn'>
          <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}
