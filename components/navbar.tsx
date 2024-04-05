"use client"
import { Menu, Sparkle } from 'lucide-react'
import Link from 'next/link'
 import React from 'react'
 import { Poppins } from 'next/font/google'
import { UserButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { MobileSlidebar } from './mobile-slidebar'

const fonts = Poppins({
    weight: "600",
    subsets: ["latin"]
});
 export default function Navbar() {
    
   return (
     <div className='flex w-full z-50 flex justify-between item-center py-2 px-4 
     border-b border-primary/10 bg-secondary  h-16'>
        <div className='flex items-center'>

            <MobileSlidebar/>
            <Link href= "/" >
                <h1 className= {cn( 'hidden md:block text-xl  md:text-3xl font-bold text-primary',
                fonts.className
                )}>
                    Companion.ai
                </h1>
            </Link>
        </div>
        <div className='flex items-center gap-x-3 '>
            <Button variant="premium" size="sm">
                Upgrade 
                <Sparkle className='h-4 w-4 fill-white text-white' />
            </Button>
            <ModeToggle/>  
            <UserButton afterSignOutUrl="/" /> 
            {/* // yaha changes kiya hai */}
         </div>
     </div>
   )
 }
 