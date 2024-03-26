import WeAreSection from "@/ui/components/sections/we-are";
import DescriptionSection from "@/ui/components/sections/description";
import CoursesSection from "@/ui/components/sections/courses";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Section 1: We Are */}

            <WeAreSection />

            {/* Section 2: Description */}

            <DescriptionSection />

            {/* Section 3: Courses */}

            <CoursesSection />
        </main>
    );
}
