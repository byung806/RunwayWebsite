import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../../next.config';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';

const LINKS = [
    {
        title: 'Sections',
        items: ['Home', 'Features', 'FAQ'],
        links: ['/', '/features', '/faq']
    },
    {
        title: 'Resources',
        items: ['Contact'],
        links: ['/faq']
    },
    {
        title: 'Others',
        items: ['Privacy'],
        links: ['/privacy-policy']
    }
];

export default function Footer() {
    return (
        <footer className="z-10 flex w-full flex-col justify-start items-center space-y-10 md:space-y-0 bg-[#ffffff] px-4 py-10 font-bold sm:px-14 sm:py-10 md:flex-row md:items-start md:space-x-36 md:px-28 md:py-20">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                    <Image
                        src={`${basePath}/icon.png`}
                        width={50}
                        height={50}
                        alt="Runway Logo"
                    />
                    <span className="text-xl font-bold">Runway</span>
                </div>
                <p className="text-base text-[#6b6b78]">
                    Learn every day.
                    <br />
                    Have fun doing it.
                </p>
                <div className="flex space-x-4 mt-2">
                    <a href="https://discord.gg/udXRnGF2Qn" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-2 bg-blue-500 rounded-full">
                        <FaDiscord />
                    </a>
                    <a href="https://www.instagram.com/runwaymobileapp" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-2 bg-pink-500 rounded-full">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@runway1694" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-2 bg-black rounded-full">
                        <FaTiktok />
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-36'>
                {LINKS.map((link) => (
                    <div
                        key={link.title}
                        className="flex flex-col space-y-4 items-center text-center md:items-start md:text-left"
                    >
                        <h3 className="text-lg font-bold text-[#2e2e2e]">
                            {link.title}
                        </h3>
                        <ul className="space-y-2">
                            {link.items.map((item, index) => (
                                <li key={item}>
                                    <Link
                                        href={link.links[index]}
                                        className="text-base text-[#6b6b78] transition duration-300 hover:text-[#2e2e2e]"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                    <span className="text-xl font-bold">Partners</span>
                </div>
                <div className="flex space-x-4 mt-2">
                    <a href="https://klinn.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-2 rounded-full">
                        <Image
                            src={`${basePath}/klinn.png`}
                            width={50}
                            height={50}
                            alt="Klinn Logo"
                            className="rounded-lg"
                        />
                    </a>
                    <a href="http://americanyoungartcircles.org/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-2 rounded-full">
                        <Image
                            src={`${basePath}/ayac.jpeg`}
                            width={50}
                            height={50}
                            alt="AYAC Logo"
                            className="rounded-lg"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
