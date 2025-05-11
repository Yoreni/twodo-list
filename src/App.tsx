import { useEffect, useState } from 'react'
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
    <div className=''>
      <a href="https://github.com/Yoreni/twodo-list" className='bg-blue-500 font-noto-sans hover:bg-blue-400 active:bg-blue-600 rounded-md text-gray-200 font-semibold p-1 fixed left-2 top-2'>See Source</a>
      <div className='flex justify-center items-center content-center h-dvh flex-row'>
        <TodoList todoList={todoList} setTodolist={setTodolist} />
        <CreateTask todoList={todoList} setTodolist={setTodolist}/>
      </div>
    </div>
  )
}

export default App
