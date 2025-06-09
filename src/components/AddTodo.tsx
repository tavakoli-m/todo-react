const AddTodo = () => {
    return (
        <>
            <div className={"flex justify-between"}>
                <button
                    className={"text-white bg-purple-600 p-2 rounded-xl text-xs hover:shadow-purple-600 hover:shadow transition"}>برگشت

                </button>

                <h2 className={"text-purple-600 text-base"}>
                    ساخت کار جدید
                </h2>
            </div>

            <form className={"block mt-20"}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان
                        </label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="اشپزی" required/>
                </div>


                <button
                    className={"text-white bg-green-600 p-2 rounded-xl text-xs hover:shadow-green-600 hover:shadow transition mx-1"}>
                    ساخت
                </button>
            </form>
        </>
    )
}

export default AddTodo;