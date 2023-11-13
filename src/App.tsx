import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/todoList';
import Navbar from './components/Navbar';
import { Todo } from './todoModel';

const App: React.FC = () => {

  const[todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
  };

  return (
    <div className="App">
      <header className='header'>
        <Navbar />
      </header>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
