import WorkshopCard from "../workshop-card";

export default function CoursesSection() {
    return (
        <section className="flex h-screen flex-col items-center justify-center bg-yellow-200">
            <WorkshopCard imageUrl="/sinerider-bg.webp" title="Magnet Mysteries" description="Hello!" />
        </section>
    );
}