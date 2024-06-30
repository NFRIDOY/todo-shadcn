import { RootState } from "@reduxjs/toolkit/query";
import "./App.css";
import { Button } from "./components/ui/button";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { ITodo, addTodo } from "./redux/features/todo/todoSlice";

function App() {
    const { todo } = useAppSelector((state: RootState) => state.todo);
    const dispatch = useAppDispatch();

    const handleOnClick = () => {};
    return (
        <>
            <Button
                onClick={() =>
                    dispatch(
                        addTodo({
                            id: "jfsdklf",
                            title: "fjsodfhiuwerwehfuiwn",
                            priority: "High",
                            isCompleted: false,
                        })
                    )
                }>
                Click Shadcn
            </Button>
            <div>
                {todo?.map((todoSingle: ITodo) => (
                    <div>{todoSingle.title}</div>
                ))}
            </div>
        </>
    );
}

export default App;
