import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { TodoList } from './ui/TodoList';
import { CreateTask } from './ui/CreateTask';
import { load, save } from './logic/save-load';

function App() {
  const [todoList, setTodolist] = useState(load());
  useEffect(() => {
    save(todoList)
  }, [todoList])

  return (
    <div className='flex justify-center items-center content-center h-dvh flex-row'>
      <TodoList todoList={todoList} setTodolist={setTodolist} />
      <CreateTask todoList={todoList} setTodolist={setTodolist}/>
    </div>
  )
}

export default App
