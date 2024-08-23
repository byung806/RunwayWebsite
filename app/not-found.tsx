import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <p className="text-[8rem]">404</p>
            <p className="text-lg max-w-sm text-center">The page you were looking for doesn&apos;t exist or has been moved.</p>
            <Link href="/" className="px-10 bg-[#8b45a4] py-4 w-fit rounded-2xl transition duration-300 hover:scale-105 m-6">
                <p className=" text-lg text-center text-white">Go home</p>
            </Link>
        </div>
    )
}