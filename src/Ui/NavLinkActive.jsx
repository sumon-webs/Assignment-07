"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkActive = ({ href, children }) => {
    const pathName = usePathname()
    return (
        <div>
            <li>
                <Link href={href}
                    className={` flex items-center gap-2 px-2 py-1 rounded-sm  hover:text-green-400
                    ${pathName === href ? 'bg-green-700 text-white shadow-md' : ' '}
                    `}
                >
                    {children}
                </Link>
            </li>
        </div>
    );
};

export default NavLinkActive;