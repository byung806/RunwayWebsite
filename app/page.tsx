import { CoursesSection, DescriptionSection, WeAreSection } from "@/app/sections";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
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
