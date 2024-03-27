"use client"

import qs from "query-string";
import { Category } from "@prisma/client"
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface categoriesProps {
    data: Category[];
};

export const Categories = ({
    data
}: categoriesProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryIO = searchParams.get("categoryId");

    const onClick = (id: string | undefined) => {
        const query = { categoryIO: id };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });

        router.push(url);
    }


    return (
        <>
            <div className="w-full overflow-x-auto space-x-2 flex p-1 ">
                <Button
                    onClick={() => onClick(undefined)}
                    className={cn(`
           flex
           items-center 
           text-center
           text-xs
           md:text-sm
           px-2
           md:px-4
           py-2
           md:py-3
           rounded-md
           bg-primary/10
           hover:opacity-75
           transition
           `,
                        !categoryIO ? "bg-primary/10" : "bg-primary/10"
                    )}
                >
                    Newest
                </Button>
                {data.map((item) => {
                    return (
                        <Button onClick={() => onClick(item.id)}
                            key={item.id}
                            className={cn(`
                flex
                items-center 
                text-center
                text-xs
                md:text-sm
                px-2
                md:px-4
                py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                transition
            `,
            item.id === categoryIO ? "bg-primary/25" :  "bg-primary/10"
                            )}
                        >
                            {item.name}
                        </Button>
                    );
                })}

            </div>
        </>
    )
}

// isme buttons ka thoda kam baaki hai