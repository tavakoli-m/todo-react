import {Link} from "react-router-dom";

const Todos = () => {
    return (
        <>
            <div className={"flex justify-between"}>
                <Link
                    to={"/todos/add"}
                    className={"text-white bg-purple-600 p-2 rounded-xl text-xs hover:shadow-purple-600 hover:shadow transition"}>ساخت
                    کار جدید
                </Link>


                <input type="text" id="search"
                       className="bg-gray-50 border max-w-46 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="جستجو"/>
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

            <div className={"flex justify-between mt-20 text-sm text-white"}>
                <p className={"text-right"}>
                    1
                </p>
                <p className={"text-right"}>
                    یادگیری React
                </p>
                <p className={"text-right"}>
                    انجام شده
                </p>
                <p>

                    <button
                        className={"text-white bg-red-600 p-2 rounded-xl text-xs hover:shadow-red-600 hover:shadow transition mx-1"}>حذف
                    </button>
                    <Link
                        to={`/todos/4/edit`}
                        className={"text-white bg-green-600 p-2 rounded-xl text-xs hover:shadow-green-600 hover:shadow transition mx-1"}>
                         ویرایش
                    </Link>
                    <button
                        className={"text-white bg-blue-600 p-2 rounded-xl text-xs hover:shadow-blue-600 hover:shadow transition mx-1"}>عوض کردن وضعیت
                    </button>

                </p>
            </div>
        </>
    )
}

export default Todos;