import type {Todo} from "../types";

const baseUrl = "http://localhost:9000";

export const getAllTodos : Promise<Todo[]> = () => fetch(`${baseUrl}/todos`).then((res) => res.json());

export const addTodo : Promise<Todo> = (todo : Exclude<Todo,"id">) => fetch(`${baseUrl}/todos`, { method: "POST", body: JSON.stringify(todo) }).then((res) => res.json());

export const getTodo : Promise<Todo> = (id : number) => fetch(`${baseUrl}/todos/${id}`).then((res) => res.json());

export const updateTodo : Promise<Exclude<Todo,"id">> = (todo : Exclude<Todo,"id">,id : number) => fetch(`${baseUrl}/${id}`,{ method: "PUT", body: JSON.stringify(todo) }).then((res) => res.json());

export const deleteTodo : Promise<object> = (id : number) => fetch(`${baseUrlUrl}/${id}`, { method: "DELETE" }).then((res) => res.json())