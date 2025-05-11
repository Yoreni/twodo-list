const TODOLIST_KEY: string = "todolist"

export function save(todolist: any)
{
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist))
}

export function load()
{
    const data = localStorage.getItem(TODOLIST_KEY);
    if (data === null) 
        return {};
    return JSON.parse(data);
}