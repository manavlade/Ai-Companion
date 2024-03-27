import Navbar from "@/components/navbar";
import { Slidebar } from "@/components/slidebar";

const rootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar/>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                <Slidebar/>
            </div>
            <main className="md: pl-20 pt-2 h-full ">
                {children}
            </main>
        </div>
    )
}
export default rootLayout;