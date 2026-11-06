const technologies = ["React", "Next.js", "Tailwind", "Node.js", "Python", "AWS", "Flutter", "Docker"];

export const TechStack = () => (
    <section className="py-10 border-y border-white/5 bg-[#080808] overflow-hidden" aria-label="Technologies">
        <div data-reveal className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {technologies.map(tech => (
                <span key={tech} className="text-xl md:text-2xl font-bold text-white/30 uppercase tracking-widest">{tech}</span>
            ))}
        </div>
    </section>
);
