import Link from 'next/link';
import Logo from '@/ui/components/logo';

export default function Footer() {
    return (
        <footer className="flex flex-col w-full items-center justify-center bg-gray-100 mx-3">
            <div className="w-full draggable">
                <div className="container flex flex-col mx-auto">
                    <div className="flex flex-col items-center w-full my-10">
                        <span className="mb-8">
                            <Logo />
                        </span>
                        <div className="flex flex-col items-center gap-6 mb-8">
                            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                                <Link href="/" className="text-gray-600 hover:text-gray-900">Our Team</Link>
                                <Link href="/" className="text-gray-600 hover:text-gray-900">Workshops</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
