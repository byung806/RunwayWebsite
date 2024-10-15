'use client';

import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../../next.config';
import { FaApple } from 'react-icons/fa';

const DOWNLOAD_LINK =
    'https://apps.apple.com/app/runway-learning-made-simple/id6639588047';

export default function Header() {
    return (
        <header className="absolute top-0 z-10 flex w-full items-center justify-between px-8 py-8 font-bold md:px-20 md:py-12">
            {/* bg-[#3b0051] */}
            <Link href="/" className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center space-x-2 md:space-x-3">
                    <Image
                        className="flex w-10 md:w-12 rounded-xl md:rounded-2xl"
                        src={`${basePath}/icon.png`}
                        alt="runway icon"
                        width={40}
                        height={40}
                    />
                    <p className='text-xl md:text-3xl text-[#8b45a4]'>
                        Runway
                    </p>
                    {/* <Image
                        className="object-cover"
                        src={`${basePath}/runway-logo-light-3.png`}
                        width={200}
                        height={60}
                        // fill
                        alt="Runway Logo"
                    /> */}
                </div>
            </Link>
            <div className="flex gap-0 md:gap-4 text-[#41144e]">
                {/* <Link href="/about-us" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">About Us</Link> */}
                {/* <Link href="/our-mission" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Our Mission</Link> */}
                <Link
                    href="/faq"
                    className="rounded-full p-2 px-4 text-xl transition duration-300 hover:text-[#2e2e2e] hover:underline"
                >
                    FAQ
                </Link>
                <Link
                    href="/#features"
                    className="rounded-full p-2 px-4 text-xl transition duration-300 hover:text-[#2e2e2e] hover:underline"
                >
                    Features
                </Link>
                <Link
                    href={DOWNLOAD_LINK}
                    className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-4 py-1 transition duration-300 hover:scale-105 absolute opacity-0 pointer-events-none md:pointer-events-auto md:static md:opacity-100"
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
