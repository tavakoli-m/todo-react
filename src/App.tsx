import Header from "./components/Header.tsx";
import Todos from "./components/Todos.tsx";
import AddTodo from "./components/AddTodo.tsx";
import EditTodo from "./components/EditTodo.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useState} from "react";

export interface Todo{
    id: number;
    name: string;
    isDone: boolean;
}

const App = () => {

    const [todos,setTodos] = useState<Todo[]>([]);

    const addNewTodo = (name: string) => {
        setTodos([
            ...todos,
            {
                id : Math.floor(Math.random()*10000),
                name,
                isDone:false,
            }
        ])
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const doneTodo = (id: number) => {
        let newtodos = [...todos];
        let todoIndex = newtodos.findIndex(todo => Number(todo.id) === Number(id));
        newtodos[todoIndex].isDone = !newtodos[todoIndex].isDone;
        setTodos(newtodos);
    }

    return (
        <div className={"h-screen w-screen bg-gray-900"}>
            <div className={"container mx-auto pt-4"}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todos"} />} />
                    <Route path={"/todos"} element={<Todos deleteTodo={deleteTodo} todos={todos} doneTodo={doneTodo} />} />
                    <Route path={"/todos/add"} element={<AddTodo addNewTodo={addNewTodo} />} />
                    <Route path={"/todos/:id/edit"} element={<EditTodo />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;