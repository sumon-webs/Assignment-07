"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkActive = ({ href, children }) => {
    const pathName = usePathname()
    return (
        <div>
            <li>
                <Link href={href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-green-100 hover:text-green-700
                    ${pathName === href ? 'bg-green-500 text-white shadow-md' : 'text-gray-700'}
                    `}
                >
                    {children}
                </Link>
            </li>
        </div>
    );
};

export default NavLinkActive;