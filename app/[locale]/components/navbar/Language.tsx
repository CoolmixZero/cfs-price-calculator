"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const Language = () => {
      const getFlag = (c: any) => String.fromCodePoint(...[...c.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()))


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
          <Link className="text-black dark:text-white" href={`/en${pathname === '/' ? pathname : pathname.slice(3)}`} lang='en'>
            {"en"}
          </Link>
          {" | "}
          <Link className="text-black dark:text-white" href={`/ru${pathname.slice(3)}`} lang='ru'>
          {"ru"}
          </Link>
        </div>
    );
}

export default Language;