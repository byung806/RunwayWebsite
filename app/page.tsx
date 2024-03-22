import { CoursesSection, DescriptionSection, WeAreSection } from "@/app/sections";
import Header from "@/ui/components/header";
import Logo from "@/ui/components/logo";
import NavLinks from "@/ui/components/nav-links";
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* header is behaving weird - sometimes header stops sticking for no reason
            fix: uncomment out code below and rerun */}
            {/* <Header /> */}
            {/* <nav className="sticky top-0 bg-white bg-opacity-60 backdrop-blur-md border-b border-gray-200">
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
            </nav> */}

            {/* Section 1: We Are */}

            <WeAreSection />

            {/* Section 2: Description */}

            <DescriptionSection />

            {/* Section 3: Courses */}

            <CoursesSection />

            {/* Section 4: */}
        </main>
    );
}
