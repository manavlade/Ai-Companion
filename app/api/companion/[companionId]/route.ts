import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params } : { params: {companionId: string} }
    ) {
    try {
        const body = await req.json();
        const user = await currentUser();
        const { src, name, description, instructions, seed, categoryId } = body;

        if(!params.companionId){
            return new NextResponse("Companion ID is required", {status: 400 });
        }

        if (!user || !user.id || !user.firstName) {
            return new NextResponse("Unauthorized User", { status: 401 })
        }

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400 })
        }

        //To DO check For Subscription

        const companion = await prismadb.companion.update({
            where: { 
                id: params.companionId,
                userId: user.id
            },
            data: {
                categoryId,
                userId: user.id,
                username: user.firstName,
                src,
                name,
                description,
                instructions, 
                seed
            }
        })
        return NextResponse.json(companion);
    } catch (error) {
        alert("Error in fetching data");
        console.log("[COMPANION_PATCH]", error);
        return new NextResponse("Internal Error ", { status: 404 });
    }
}
// Data fetching ka thoda issue ho raha hai usko dekhna padega companion form route.ts for 
// push refer karo

export async function DELETE(
     req: Request,
    { params } : { params: {companionId: string} }
) {
    try {
        const {userId} = auth();

        if(!userId) {
            return new NextResponse("Unauthorized User", { status: 401 });
        }

        const companion = await prismadb.companion.delete({
            where: {
                userId,
                id: params.companionId
            }
        });

        return NextResponse.json(companion)
    } catch (error) {
        console.log("[COMPANION_DELETE]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}