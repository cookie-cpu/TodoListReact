
import './App.css';
//Component Imports

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>Todo List</header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
