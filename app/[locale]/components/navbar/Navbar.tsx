"use client"

import Language from "./Language";

interface NavbarProps {
  author: string;
}

const Navbar: React.FC<NavbarProps> = ({author}) => {
    return (
        <div
            className="
              relative
              flex
              flex-row
              text-neutral-200
              items-center
              justify-between
              w-full
              h-full
              z-20
            "
        >
          <p className="text-md">
            {author}{" "}<a className="font-bold" href="https://github.com/CoolmixZero">CoolmixZero</a>
          </p>
          <Language />
        </div>
    );
}

export default Navbar;