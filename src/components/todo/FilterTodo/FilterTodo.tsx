import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export default function FilterTodo() {
    const [position, setPosition] = React.useState("bottom");
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="High">
                        High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Medium">
                        Medium
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Low">
                        Low
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
