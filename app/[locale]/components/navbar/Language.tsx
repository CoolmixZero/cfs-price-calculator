"use client"

import Image from "next/image";
import Link from "next/link";

const Language = () => {
    return (
        <div
          className="
            fixed
            bg-transparent
            inset-y-0 
            right-0
            px-4
            z-30
          "
        >
          <Link href="/en" lang='en'>
            <Image 
              src="/images/uk.png"
              width={32}
              height={32}
              alt="uk"
            />
          </Link>
          {" "}{" "}
          <Link href="/ru" lang='ru'>
          <Image 
              src="/images/russia.png"
              width={32}
              height={32}
              alt="ru"
            />
          </Link>
        </div>
    );
}

export default Language;