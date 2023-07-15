"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Language = () => {
    let pathname = usePathname()
    return (
        <div
          className="
            fixed
            bg-transparent
            w-fit
            
            inset-y-0 
            right-0
            px-4
            z-30
            text-black/10 dark:text-white/30 text-center
          "
        >
          <Link className="text-black dark:text-white" href={`/en${pathname?.startsWith("/en") ? pathname.slice(3) : pathname}`} lang='en'>
            {"en"}
          </Link>
          {" | "}
          <Link className="text-black dark:text-white" href={`/ru${pathname?.startsWith("/en") ? pathname.slice(3) : pathname}`} lang='ru'>
          {"ru"}
          </Link>
        </div>
    );
}

export default Language;