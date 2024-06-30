import { ITodo, addTodo } from "@/redux/features/todo/todoSlice";
import AddTodo from "./AddTodo/AddTodo";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import FilterTodo from "./FilterTodo/FilterTodo";

function Todo() {
    const { todo } = useAppSelector((state: RootState) => state.todo);
    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="bg-gradient-to-tr from-violet-500 via-blue-500 to-red-500  w-[800px] p-1">
                    <div className="bg-white p-2">
                        <div className="flex justify-between">
                            <div>
                                <AddTodo />
                            </div>
                            <div>
                                <FilterTodo />
                            </div>
                        </div>

                        <div>
                            {todo?.map((todoSingle: ITodo) => (
                                <div>{todoSingle.title}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
