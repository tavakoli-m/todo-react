import {Link} from "react-router-dom";
import type {TodosProp} from "../types";

const Todos = ({ todos,deleteTodo,doneTodo } : TodosProp) => {
    return (
        <>
            <div className={"flex justify-between"}>
                <Link
                    to={"/todos/add"}
                    className={"text-white bg-purple-600 p-2 rounded-xl text-xs hover:shadow-purple-600 hover:shadow transition"}>ساخت
                    کار جدید
                </Link>


                <h2 className={"text-purple-600 text-base"}>
                    لیست کار ها
                </h2>
            </div>

            <div className={"flex justify-between mt-20 text-sm text-white"}>
                <p className={"text-right"}>
                    #
                </p>
                <p className={"text-right"}>
                    عنوان
                </p>
                <p className={"text-right"}>
                    وضعیت
                </p>
                <p className={"text-right"}>
                    عملیات
                </p>
            </div>

            {todos.map(todo => (
                <div className={"flex justify-between mt-20 text-sm text-white"} key={todo.id}>
                    <p className={"text-right"}>
                        {todo.id}
                    </p>
                    <p className={"text-right"}>
                        {todo.name}
                    </p>
                    <p className={"text-right"}>
                        {todo.isDone ? 'انجام شده' : 'انجام نشده'}
                    </p>
                    <p>

                        <button
                            type={"button"}
                            onClick={() => deleteTodo(todo.id)}
                            className={"text-white bg-red-600 p-2 rounded-xl text-xs hover:shadow-red-600 hover:shadow transition mx-1"}>حذف
                        </button>
                        <Link
                            to={`/todos/${todo.id}/edit`}
                            className={"text-white bg-green-600 p-2 rounded-xl text-xs hover:shadow-green-600 hover:shadow transition mx-1"}>
                            ویرایش
                        </Link>
                        <button
                            type={"button"}
                            onClick={() => doneTodo(todo.id)}
                            className={"text-white bg-blue-600 p-2 rounded-xl text-xs hover:shadow-blue-600 hover:shadow transition mx-1"}>عوض کردن وضعیت
                        </button>

                    </p>
                </div>
            ))}

        </>
    )
}

export default Todos;