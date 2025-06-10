import axios from "axios";
import type { Todo } from "../types";

const baseUrl = "http://localhost:9000";

// گرفتن همه‌ی todo ها
export const getAllTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(`${baseUrl}/todos`);
    return response.data;
};

// افزودن todo جدید
export const addTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
    const response = await axios.post<Todo>(`${baseUrl}/todos`, todo);
    return response.data;
};

// گرفتن todo خاص
export const getTodo = async (id: number): Promise<Todo> => {
    const response = await axios.get<Todo>(`${baseUrl}/todos/${id}`);
    return response.data;
};

// آپدیت todo
export const updateTodo = async (todo: Omit<Todo, "id">, id: number): Promise<Todo> => {
    const response = await axios.put<Todo>(`${baseUrl}/todos/${id}`, todo);
    return response.data;
};

// حذف todo
export const deleteTodo = async (id: number): Promise<object> => {
    const response = await axios.delete(`${baseUrl}/todos/${id}`);
    return response.data;
};
