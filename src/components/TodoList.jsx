import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos,}) {

  return (
    <div className="todo-container">
      <ul className="todo-list">

      { Object.values(todos).map((todo) => (

        <Todo 
          text={todo.text} 
          key={todo.key} 
          todos={todos} 
          setTodos={setTodos}
          todo={todo} 
        />

      ))
      }

      </ul>
    </div>
  )
}
