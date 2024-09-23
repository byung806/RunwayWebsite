'use client';

import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../../next.config';
import { FaApple } from 'react-icons/fa';

const DOWNLOAD_LINK =
    'https://apps.apple.com/app/runway-learning-made-simple/id6639588047';

export default function Header() {
    return (
        <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-[#3b0051] px-4 py-1 font-bold sm:px-14 sm:py-2 md:px-28 md:py-3">
            <Link href="/" className="flex items-center gap-2 md:gap-4">
                {/* <Image
                    className="object-cover"
                    src={`${basePath}/runway-logo-dark-2.png`}
                    width={120}
                    height={40}
                    // fill
                    alt="Runway Logo"
                /> */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Image
                        className="flex w-10 md:w-12 rounded-xl md:rounded-2xl"
                        src={`${basePath}/icon.png`}
                        alt="runway icon"
                        width={40}
                        height={40}
                    />
                    <p className='text-xl md:text-3xl text-[#f3e1fc]'>
                        Runway
                    </p>
                </div>
            </Link>
            <div className="flex gap-0 md:gap-4 text-[#f3e1fc]">
                {/* <Link href="/about-us" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">About Us</Link> */}
                {/* <Link href="/our-mission" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Our Mission</Link> */}
                <Link
                    href="/faq"
                    className="rounded-full p-2 px-4 text-lg transition duration-300 hover:bg-[#f1f2f4] hover:text-[#2e2e2e]"
                >
                    FAQ
                </Link>
                <Link
                    href="/#features"
                    className="rounded-full p-2 px-4 text-lg transition duration-300 hover:bg-[#f1f2f4] hover:text-[#2e2e2e]"
                >
                    Features
                </Link>
                <Link
                    href={DOWNLOAD_LINK}
                    className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-4 py-1 transition duration-300 hover:scale-105"
                >
                    <FaApple className="text-2xl text-white" />
                    <p className="text-center text-lg text-white">
                        Download for free
                    </p>
                </Link>
            </div>
        </header>
    );
}
