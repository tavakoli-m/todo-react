const TodoList = () => {
    return (
        <div>
            <h1>
                Todo Lists
            </h1>
            <form className={"space"}>
                <label>Todo Name</label>
                <br/>
                <input type={"text"} />
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
                    <tr>
                        <td>3</td>
                        <td>name</td>
                        <td>
                            <button className={"red"}>
                                not Completed
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>name</td>
                        <td>
                            <button className={"green"}>
                                Completed
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;