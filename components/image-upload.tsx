"use client";

import { useEffect, useState } from "react";

import {CldUploadButton} from "next-cloudinary";
import Image from "next/image";

interface imageUploadProp {
    value: string;
    onChange: (src: string) => void;
    disabled?: boolean
}

export const ImageUpload = ({
    value,
    onChange,
    disabled
}: imageUploadProp ) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    return (
        <div>
            <CldUploadButton   
            onUpload={( result: any) =>  onChange(result.info.secure_url)}
            options={{ 
                maxFiles: 1
            }}
                uploadPreset="sz2sfspf"
            >
                <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg
                hower:opacity-75 transition flex flex-col space-y-2 items-center justify-center
                ">
                    <div className="w-40 h-40 relative">
                        <Image 
                        fill
                        alt="upload"
                        src={value || "/placeholder.svg"}
                        className=" rounded-lg object-cover"
                        />
                    </div>
                </div>
            </CldUploadButton>
        </div>
    )
}