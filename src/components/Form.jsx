import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
      <input type='text' className='todo-input'/>
      <button className='todo-btn' type='submit'>
        <i className='add-button'></i>
      </button>

      </form>
    </div>
  )
}
