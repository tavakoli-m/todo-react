import Header from "./components/Header.tsx";
import Todos from "./components/Todos.tsx";
import AddTodo from "./components/AddTodo.tsx";
import EditTodo from "./components/EditTodo.tsx";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Todo} from "./types";
import {getAllTodos, addTodo, deleteTodo as deleteTodoService, updateTodo} from "./services/TodoService.ts";


const App = () => {
    const [todos,setTodos] = useState<Todo[]>([]);
    const navigate = useNavigate()

    const addNewTodo = async (name: string) => {
        try{
            const todo = await addTodo({name,isDone : false})
            setTodos([
                ...todos,
                todo
            ])
            navigate("/todos")
        }
        catch (err){
            console.log(err)
        }
    }

    const deleteTodo = async (id: number) => {
        try{
            await deleteTodoService(id)
            setTodos(todos.filter(todo => todo.id !== id))
        }
        catch(err){
            console.log(err)
        }
    }

    const doneTodo = async (id: number) => {
        try {
            let newtodos = [...todos];
            let todoIndex = newtodos.findIndex(todo => String(todo.id) === String(id));
            newtodos[todoIndex].isDone = !newtodos[todoIndex].isDone;
             updateTodo(newtodos[todoIndex],id)
            setTodos(newtodos);
        }
        catch(err){
            console.log(err)
        }
    }

    const editTodo = async (id: number,name : string|undefined) => {
        console.log(id,name)
        try{
            let newtodos = [...todos];
            let todoIndex = newtodos.findIndex(todo => String(todo.id) === String(id));
            newtodos[todoIndex].name = name || "";
            const result = await updateTodo(newtodos[todoIndex],id)
            newtodos[todoIndex] = result
            setTodos(newtodos);

            navigate("/todos")
        }catch (err){
            console.log(err)
        }
    }

    const getTodo = (id: string) : Todo|undefined => {
        return todos.find(todo => String(todo.id) === String(id))
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const todos = await getAllTodos()
                setTodos(todos)
            }
            catch (err){
                console.log(err)
            }
        }

        fetchData()
    }, []);

    return (
        <div className={"h-screen w-screen bg-gray-900"}>
            <div className={"container mx-auto pt-4"}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todos"} />} />
                    <Route path={"/todos"} element={<Todos deleteTodo={deleteTodo} todos={todos} doneTodo={doneTodo} />} />
                    <Route path={"/todos/add"} element={<AddTodo addNewTodo={addNewTodo} />} />
                    <Route path={"/todos/:id/edit"} element={<EditTodo editTodo={editTodo} getTodo={getTodo} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;