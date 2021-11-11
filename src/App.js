
import './App.css';
//Component Imports

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (<>
    <header>Todo List</header>
      <div className="App">
        <Form/>
        <TodoList/>
      </div>
    
  </>);
}

export default App;
