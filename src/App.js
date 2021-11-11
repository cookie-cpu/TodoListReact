import React, {useState} from 'react';

import './App.css';
//Component Imports

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (<>
    <header>Todo List</header>
      <div className="App">
        <Form/>
        <TodoList/>
      </div>
    
  </>);
}

export default App;
