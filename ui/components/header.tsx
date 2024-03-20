import Link from 'next/link';
import NavLinks from '@/ui/components/nav-links';
import Logo from '@/ui/components/logo';

export default function Header() {
    return (
        <nav className="sticky top-0 bg-white bg-opacity-60 backdrop-blur-md border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex h-16 justify-between gap-4 md:gap-8">
                    <Link className="flex" href="/">
                        <Logo />
                    </Link>
                    <div className="flex h-full space-x-2">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    );
}