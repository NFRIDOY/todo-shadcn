import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
    id: string;
    title: string;
    priority: string;
    isCompleted: boolean;
}
export interface IInitialState {
    todo: ITodo[];
}

const initialState: IInitialState = {
    todo: [
        {
            id: "fjsokfjweo",
            title: "title",
            priority: "High",
            isCompleted: false
        },
        {
            id: "fjsokfjwedadasdasdo",
            title: "title2",
            priority: "Low",
            isCompleted: false
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
