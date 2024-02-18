import { UserButton } from "@clerk/nextjs";
const rootPage = () => {
    return (
        <div className="h-screen">
            <UserButton />
        </div>
    )
}
export default rootPage;