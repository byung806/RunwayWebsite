'use client';

import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../../next.config';

export default function Header() {
    return (
        <header className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-[#dedede] bg-white px-4 py-1 font-bold sm:px-14 sm:py-2 md:px-28 md:py-3">
            <Link href="/" className="flex items-center gap-2 md:gap-4">
                <Image
                    src={`${basePath}/icon.png`}
                    width={50}
                    height={50}
                    alt="Runway Logo"
                />
                <span className="text-xl font-bold">Runway</span>
            </Link>
            <div className="flex gap-4">
                {/* <Link href="/about-us" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">About Us</Link> */}
                {/* <Link href="/our-mission" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Our Mission</Link> */}
                <Link
                    href="/faq"
                    className="rounded-full p-2 px-4 text-lg text-[#6b6b78] transition duration-300 hover:bg-[#f1f2f4] hover:text-[#2e2e2e]"
                >
                    FAQ
                </Link>
                <Link
                    href="/#features"
                    className="rounded-full p-2 px-4 text-lg text-[#6b6b78] transition duration-300 hover:bg-[#f1f2f4] hover:text-[#2e2e2e]"
                >
                    Features
                </Link>
            </div>
        </header>
    );
}
