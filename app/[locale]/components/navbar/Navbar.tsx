"use client"

import Link from "next/link";
import Language from "./Language";

interface NavbarProps {
  author: string;
  calculator: string;
  catalog: string;
}

const Navbar: React.FC<NavbarProps> = ({author, calculator, catalog}) => {
    return (
      <>
        <p className="text-md text-black dark:text-white">
          {author}{" "}<a className="font-bold" href="https://github.com/CoolmixZero">CoolmixZero</a>
        </p>
        <div
            className="
              fixed
              flex
              text-neutral-200
              justify-center
              w-full
              z-50
            "
        >
          <div 
            className="
              flex
              flex-row
              px-2
              py-1
              rounded-full
              gap-2
              w-fit
              bg-black/50
              select-none
              items-centre
              text-white 
            "
          >
          <Link className="text-md hover:underline" href={author === "Создал:" ? "/" : "/en"}>{calculator}</Link>
          <p className="text-black/10 dark:text-white/10 text-center">{" | "}</p>
          <Link className="text-md hover:underline" href={author === "Создал:" ? "/catalog" : "/en/catalog"}>{catalog}</Link>
          </div>
        </div>
        <Language />
      </>
    );
}

export default Navbar;