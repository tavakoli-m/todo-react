import Header from "./components/Header.tsx";
import Todos from "./components/Todos.tsx";
import AddTodo from "./components/AddTodo.tsx";
import EditTodo from "./components/EditTodo.tsx";
import {Navigate, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className={"h-screen w-screen bg-gray-900"}>
            <div className={"container mx-auto pt-4"}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todos"} />} />
                    <Route path={"/todos"} element={<Todos />} />
                    <Route path={"/todos/add"} element={<AddTodo />} />
                    <Route path={"/todos/:id/edit"} element={<EditTodo />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;