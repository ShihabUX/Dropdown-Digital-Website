"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "Tailwind", "Node.js", "Python", "AWS", "Flutter", "Docker",
    "React", "Next.js", "Tailwind", "Node.js", "Python", "AWS", "Flutter", "Docker" // Duplicate for seamless loop
];

export const TechStack = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-[#080808] overflow-hidden">
            <div className="max-w-[100vw] overflow-hidden flex whitespace-nowrap relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

                <motion.div
                    className="flex gap-12 md:gap-24"
                    animate={{ x: [0, -1000] }} // Adjust value based on content width
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold text-white/30 uppercase tracking-widest min-w-max">
                            {tech}
                        </span>
                    ))}
                    {/* Repeat again to ensure no gaps on wide screens during loop reset if needed, though the array has duplicates */}
                    {technologies.map((tech, index) => (
                        <span key={`repeat-${index}`} className="text-xl md:text-2xl font-bold text-white/30 uppercase tracking-widest min-w-max">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
