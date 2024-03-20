'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Workshops', href: '/workshops' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex items-center gap-2 hover:text-bg-secondary p-3 text-md font-medium',
                            {
                                'text-bg-secondary': pathname === link.href,
                            },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
