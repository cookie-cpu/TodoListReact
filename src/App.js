import React, {useState, useEffect} from 'react';

import './App.css';
//Component Imports

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //States and Hooks
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(()=>{
    console.log('useEffect rerender')
    const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
    filterHandler();
  }, [todos, status])

  return (<>
    <header>Todo List</header>
      <div className="App">

        <Form 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
            inputText={inputText}
            setStatus={setStatus}
            
        />

        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />

      </div>
    
  </>);
}

export default App;
