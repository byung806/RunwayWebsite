import Link from "next/link";
import Image from "next/image";
import { basePath } from "../../next.config";

function Header() {
    return (
        <header className="flex justify-between items-center px-10 py-3 w-full top-0 absolute">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src={`${basePath}/icon.png`}
                    width={50}
                    height={50}
                    alt="Runway Logo"
                />
                <span className="text-xl font-bold text-white">Runway</span>
            </Link>
            <div className="flex gap-4">
                {/* <Link href="/about-us" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">About Us</Link> */}
                {/* <Link href="/our-mission" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Our Mission</Link> */}
                <Link href="/contact" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Contact</Link>
                <Link href="/privacy-policy" className="text-lg text-white rounded-full hover:bg-[#252525] p-2 px-4 transition duration-300">Privacy Policy</Link>
            </div>
        </header>
    );
}

export default Header;