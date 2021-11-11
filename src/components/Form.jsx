import React from 'react'

export default function Form() {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    
    <form>
      <input onChange={inputTextHandler} type='text' className='todo-input'/>
      <button className='todo-btn' type='submit'>
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
