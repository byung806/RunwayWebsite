import WorkshopCard from "../workshop-card";
import RevealOnScroll from '@/ui/components/reveal-on-scroll';

export default function CoursesSection() {
    return (
        <section className="flex flex-col items-center justify-center space-y-10 p-20">
            <div className="text-center text-3xl font-extrabold">
                Our Upcoming Workshops
            </div>

            <RevealOnScroll>
                <WorkshopCard imageUrl="/sinerider-bg.webp" title="Magnet Mysteries" description="Unlock the secrets of magnetism with our highly engaging magnet lab! With a lesson on the fundamentals of magnetism, followed by a series of stations with different magnet demonstrations, children can discover how magnets attract or repel certain materials and why." />
            </RevealOnScroll>
            
            <RevealOnScroll>
                <WorkshopCard imageUrl="/bunny-bg.webp" title="Wonderland" description="Unlock the secrets of magnetism with our highly engaging magnet lab! With a lesson on the fundamentals of magnetism, followed by a series of stations with different magnet demonstrations, children can discover how magnets attract or repel certain materials and why." />
            </RevealOnScroll>
        </section>
    );
}