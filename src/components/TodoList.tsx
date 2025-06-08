import {type ChangeEvent, type FormEvent, useState} from "react";

interface Todo{
    id: number;
    name: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos,setTodos] = useState<Todo[]>([]);
    const [newTodo,setNewTodo] = useState<string>("")

    const handleAddTodo = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(newTodo != null){
            setTodos([
                ...todos,
                {
                    id : Math.floor(Math.random() * 100),
                    name : newTodo,
                    completed : false
                }
            ])

            setNewTodo("")
        }
    }

    const completeTodo = (id : number) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const updatedTodo =
            todos[todoIndex] = {
            ...todos[todoIndex],
            completed: !todos[todoIndex].completed
        };
        let updatedTodos = [...todos];
        updatedTodos[todoIndex] = updatedTodo

        setTodos(updatedTodos)

    }

    return (
        <div>
            <h1>
                Todo Lists
            </h1>
            <form className={"space"} onSubmit={handleAddTodo}>
                <label>Todo Name</label>
                <br/>
                <input type={"text"} onChange={(event: ChangeEvent<HTMLInputElement>) => setNewTodo((event.target.value))} value={newTodo} />
                <button type={"submit"}>add</button>
            </form>
            <table className={"App"}>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            status
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>
                                <button onClick={() => completeTodo(todo.id)} className={todo.completed ? "green" : "red"}>
                                    {todo.completed ? "Yes" : "No"}
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;