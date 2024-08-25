import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="z-10 flex w-full items-center justify-between border-b border-[#dedede] bg-[#f2f2f2] px-4 sm:px-14 md:px-28 py-1 sm:py-2 md:py-3 font-bold">
            <Link
                href="/privacy-policy"
                className="rounded-full p-2 px-4 text-lg text-[#6b6b78] transition duration-300 hover:bg-[#f1f2f4] hover:text-[#2e2e2e]"
            >
                Privacy Policy
            </Link>
        </footer>
    );
}
