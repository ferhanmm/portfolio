import { Globe2Icon } from "lucide-react";

export default function Logo(){
    return (
        <span className="flex gap-2 items-center font-semibold flex-shrink-0 mr-auto text-lg">
            <Globe2Icon className="size-8" />
            <span>Portfolio</span>
        </span>
    )
}