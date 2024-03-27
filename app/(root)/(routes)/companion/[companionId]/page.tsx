import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";
import { ObjectId } from 'mongodb';
interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};

const CompanionPage = async ({
    params
}: CompanionIdPageProps) => {

    //Todo check Subscription

    const isValidObjectId = (id: string) => {
        return /^[0-9a-fA-F]{24}$/.test(id);
    };

    let companionId: string | null = null;

    if (isValidObjectId(params.companionId)) {
        companionId = new ObjectId(params.companionId).toHexString();
    }

    if (companionId) {
        const companion = await prismadb.companion.findUnique({
            where: {
                id: companionId
            }
        });
        // Proceed with your logic using the companion data
    } else {
        // Handle the case where the companionId is not valid
        console.error('Invalid companionId provided');
    }

    const categories = await prismadb.category.findMany();
    return (
        <>
            <CompanionForm
                initialData={companionId}
                categories={categories} 
            />
            {/* <CompanionForm/> */}
        </>
    );
}
export default CompanionPage;