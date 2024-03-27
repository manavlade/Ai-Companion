"use client"

import { Companion, Message } from "@prisma/client"
import { Button } from "./ui/button";
import { ChevronLeft, Edit, MessagesSquare, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { BotAvatar } from "./Bot-Avatar";
import { auth, useUser } from "@clerk/nextjs";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


interface ChatHeaderProps {
    companion: Companion & {
        messages: Message[];
        _count: {
            messages: number;
        };
    };
};

export const ChatHeader = ({
    companion
}:ChatHeaderProps ) => {
    const router = useRouter();
    const {user} = useUser();
    return (
        <div className=" flex w-full justify-between items-center border-b border-primary/10 pb-4" >
            <div className=" flex gap-x-2 items-center">
                <Button onClick={() => router.back()} size= "icon" variant= "ghost" >
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <BotAvatar src = {companion.src} />
                <div className=" flex flex-col gap-y-1">
                    <div className=" flex items-center gap-x-2">
                        <p className=" font-bold" >
                            {companion.name}
                        </p>
                        <div className=" flex items-center text-xs text-muted-foreground" >
                            <MessagesSquare className=" w-3 h-3 mr-1"/>
                            {companion._count.messages}
                        </div>
                    </div>
                    <p className=" text-xs text-muted-foreground" >
                        Created by {companion.username}
                    </p>
                </div>
            </div>
            {user?.id === companion.userId && (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" >
                            <MoreVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
                        <DropdownMenuItem >
                            <Edit className=" w-4 h-4  mr-2" />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <Trash className=" h-4 w-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    )
}