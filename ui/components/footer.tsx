import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-10 bg-[#f2f2f2]">
            <Link href="/privacy-policy" className="text-lg text-[#6b6b78] hover:text-[#2e2e2e] rounded-full hover:bg-[#f1f2f4] p-2 px-4 transition duration-300">Privacy Policy</Link>
        </footer>
    )
}