import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Slidebar } from "@/components/slidebar"//yaha change kiya hai

export const MobileSlidebar = () => {
    return (
       <Sheet>
        <SheetTrigger className=" md:hidden pr-4">
            <Menu />
        </SheetTrigger>
        <SheetContent side= "left" className="p-0 bg-secondary pt-10 w-32">
            <Slidebar/>
        </SheetContent>
       </Sheet>
    )
}