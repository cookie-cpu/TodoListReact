import React, {useState} from 'react';

import './App.css';
//Component Imports

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States and Hooks
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState("");


  return (<>
    <header>Todo List</header>
      <div className="App">

        <Form setInputText={setInputText} 
              todos={todos} 
              setTodos={setTodos}
              inputText={inputText}
        />

        <TodoList todos={todos}/>
      </div>
    
  </>);
}

export default App;
