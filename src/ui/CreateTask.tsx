import React, { FormEvent } from 'react';

type Todo = {
    description: string;
    done: boolean;
};

type CreateTaskProps = {
    todoList: Record<string, Todo>;
    setTodolist: React.Dispatch<React.SetStateAction<Record<string, Todo>>>;
};

export function CreateTask({ todoList, setTodolist }: CreateTaskProps) {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const descriptionInput = form.elements.namedItem('desc') as HTMLInputElement;
        const description = descriptionInput?.value.trim();
        
        if (!description) return;

        addTask(description);
        descriptionInput.value = "";
    }

    function addTask(description: string) {
        const uuid = crypto.randomUUID();
        setTodolist({
            ...todoList,
            [uuid]: { description, done: false }
        });
    }

    return ( 
        <form onSubmit={onSubmit} className="p-1 m-1">
            <fieldset className='border-2 border-gray-300 p-1 rounded-md bg-white flex flex-col'>
                <legend className='bg-gray-400 rounded-md text-center m-2 font-noto-sans pl-2 pr-2'>New Task</legend>
                <input type="text" id="desc" name="desc" placeholder='Add Task' className='border-1 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg hover:bg-gray-200 bg-white shadow-sm'/>
                <br />
                <input type="submit" value="Submit" className='bg-blue-500 font-noto-sans hover:bg-blue-400 active:bg-blue-600 rounded-md text-gray-200 font-semibold p-1'/>
            </fieldset>
        </form>
    );
}