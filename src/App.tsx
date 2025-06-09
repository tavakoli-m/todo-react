import Header from "./components/Header.tsx";
import Todos from "./components/Todos.tsx";
import AddTodo from "./components/AddTodo.tsx";
import EditTodo from "./components/EditTodo.tsx";

const App = () => {
    return (
        <div className={"h-screen w-screen bg-gray-900"}>
            <div className={"container mx-auto pt-4"}>
                <Header />
            </div>
        </div>
    )
}

export default App;