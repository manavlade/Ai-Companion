"use client"
import { ChatHeader } from '@/components/Chat-Header';
import { Companion, Message } from '@prisma/client';
import React from 'react'

interface ChatClientProps {
    companion: Companion & {
        messages: Message[];
        _count: {
            messages: number;
        };
    };
};
export const ChatClient = ({
    companion
}: ChatClientProps) =>  {
  return (
    <>
    <div className=' fle flex-col h-full p-4 space-y-2' >
        <ChatHeader companion={companion} />

    </div>
    </>
  )
}

export default ChatClient;