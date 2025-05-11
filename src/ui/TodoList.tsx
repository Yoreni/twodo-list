import { Task } from './Task';

type Todo = 
{
    description: string;
    done: boolean;
};

type TodoListProps = 
{
    todoList: Record<string, Todo>;
    setTodolist: React.Dispatch<React.SetStateAction<Record<string, Todo>>>;
};

export function TodoList({ todoList, setTodolist }: TodoListProps) {
    function changeCheckStat(id: string, newState: boolean) {
        const updatedTask = { ...todoList[id], done: newState };
        setTodolist({ ...todoList, [id]: updatedTask });
    }

    function deleteTask(id: string) {
        const { [id]: _, ...rest } = todoList;
        setTodolist(rest);
    }

    const todoElements = Object.entries(todoList).map(([id, task]) => (
        <Task
            key={id}
            description={task.description}
            done={task.done}
            setDone={(newState) => changeCheckStat(id, newState)}
            deleteTask={() => deleteTask(id)}
        />
    ));

    const itemsInTodolist: number = Object.keys(todoList).length;
    return <div className='bg-white p-4 rounded-md min-w-sm h-11/12 m-1 overflow-y-auto'>
        {itemsInTodolist > 0 ? todoElements : 
        <div className='flex justify-center items-center flex-col h-full'>
            <p className='text-gray-400 text-6xl text-center'>No Tasks</p>
            <p className='text-gray-400 text-2xl'>Create tasks --{">"}</p>
        </div>
        }
    </div>;
}