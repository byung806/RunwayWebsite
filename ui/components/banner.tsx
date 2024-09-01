import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../../next.config';
import { DOWNLOAD_LINK } from '@/app/page';
import { FaApple } from 'react-icons/fa';

export default function Banner() {
    return (
        <>
            <header className="fixed bottom-0 z-10 flex w-full items-center justify-between font-bold">
                <div className="flex w-full items-center justify-center space-x-6 md:space-x-8 bg-[#8b45a4] px-10 py-3 text-white">
                    <p className="text-center text-base font-bold md:text-xl">
                        Runway is now out on the App Store!
                    </p>
                    <form className="flex flex-col space-x-4 font-bold">
                        <Link
                            href={DOWNLOAD_LINK}
                            className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-white px-4 py-2 transition duration-300 hover:scale-105 md:px-6 md:py-2"
                        >
                            <FaApple className="text-2xl text-[#8b45a4]" />
                            <p className="text-center text-lg text-[#8b45a4]">
                                Download
                            </p>
                        </Link>
                    </form>
                </div>
            </header>
            <div className="h-20"></div>
        </>
    );
}
