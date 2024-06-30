import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todo/todoSlice";

import { useAppDispatch } from "@/redux/hooks";

export default function AddTodo() {
    
    const dispatch = useAppDispatch();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Your Todo</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            defaultValue=""
                            className="col-span-3"
                            placeholder="Type your title"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="description"
                            defaultValue=""
                            className="col-span-3"
                            placeholder="Type your Description"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={() =>
                            dispatch(
                                addTodo({
                                    title: "Magna ullamco pariatur officia nisi sit consectetur consectetur fugiat in.",
                                    despription:
                                        "Amet nostrud incididunt incididunt duis aute nisi sint est Lorem nostrud voluptate aliquip irure ullamco.",
                                    priority: "High",
                                })
                            )
                        }>
                        Add Todo
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
