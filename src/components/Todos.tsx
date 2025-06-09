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