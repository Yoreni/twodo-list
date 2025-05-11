import { ChangeEvent } from 'react';

type TaskProps = {
    description: string;
    done: boolean;
    setDone: (done: boolean) => void;
    deleteTask: () => void;
};

export function Task({ description, done, setDone, deleteTask }: TaskProps) {
    function onCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        setDone(event.target.checked);
    }

    const textIfDone = done ? "line-through text-gray-400" : ""
    return (
        <div className='flex justify-between mb-2'>
            <div>
                <input type="checkbox" checked={done} onChange={onCheckboxChange} className='mr-2 checked:text-white checked:accent-emerald-500'/>
                <span className={`text-md font-noto-sans ${textIfDone}`}>{description}</span>
            </div>
            <div>
                <button className=" bg-gray-100 text-gray-400 shadow-sm hover:text-red-600 transition-colors duration-300 rounded-md pl-2 pr-2 font-semibold" onClick={deleteTask}>X</button>
            </div>
        </div>
    );
}