import React from 'react'

export default function Form({ setInputText, todos, setTodos, inputText}) {

  const inputTextHandler = (e) => {
    //console.log(e.target.value)
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    //prevents page reload on submit
    e.preventDefault()

    setTodos([
      ...todos, {text: inputText, completed: false, id: inputText},
    ]);
    setInputText("");
  }

  return (
    
    <form>
    
      <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
        <button onClick={submitTodoHandler} className='todo-btn' type='submit'>
          <i className='add-button'></i>
        </button>

        <div className='select'>
          <select name='todos' className='filter-todos'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Failed</option>
          </select>
        </div>

    </form>
    
  )
}
