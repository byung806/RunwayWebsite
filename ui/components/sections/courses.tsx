import WorkshopCard from "../workshop-card";

export default function CoursesSection() {
    return (
        <section className="flex h-screen flex-col items-center justify-center">
            <WorkshopCard imageUrl="/sinerider-bg.webp" title="Magnet Mysteries" description="Unlock the secrets of magnetism with our highly engaging magnet lab! With a lesson on the fundamentals of magnetism, followed by a series of stations with different magnet demonstrations, children can discover how magnets attract or repel certain materials and why." />
        </section>
    );
}