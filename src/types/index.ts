export interface Todo{
    id: number;
    name: string;
    isDone: boolean;
}

export interface TodosProp{
    todos : Todo[],
    deleteTodo : (id : number) => void,
    doneTodo : (id : number) => void,
}

export interface EditTodoProp{
    editTodo : (id : number,name : string) => void;
    getTodo : (id: number) => Todo|undefined
}

export interface AddTodoProp {
    addNewTodo : (name : string) => void;
}