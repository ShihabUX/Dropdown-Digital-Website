"use client";

import { BentoGrid, BentoGridItem } from "@/app/components/ui/BentoGrid";
import { AppWindow, Code2, LineChart, Palette } from "lucide-react";

export const Services = () => {
    const items = [
        {
            title: "MVP Development",
            description: "Rapid prototyping and Agile sprints to get you to market fast.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#FF1E1E]/20 to-[#121212] border border-[#FF1E1E]/10" />,
            icon: <RocketIcon className="h-4 w-4 text-[#FF1E1E]" />,
            className: "md:col-span-2",
        },
        {
            title: "AI Dashboards",
            description: "Predictive analytics, data parsing, and automation.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#FF1E1E]/20 to-[#121212] border border-[#FF1E1E]/10" />,
            icon: <LineChart className="h-4 w-4 text-[#FF1E1E]" />,
            className: "md:col-span-1",
        },
        {
            title: "Web & App Dev",
            description: "Next.js, React Native, and Flutter for cross-platform excellence.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#FF1E1E]/20 to-[#121212] border border-[#FF1E1E]/10" />,
            icon: <Code2 className="h-4 w-4 text-[#FF1E1E]" />,
            className: "md:col-span-1",
        },
        {
            title: "UI/UX Design",
            description: "Complex logic made simple. 'Friendly guide' interfaces.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#FF1E1E]/20 to-[#121212] border border-[#FF1E1E]/10" />,
            icon: <Palette className="h-4 w-4 text-[#FF1E1E]" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-sm font-bold text-[#FF1E1E] uppercase tracking-widest mb-2">Capabilities</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Full-Stack Excellence.</h3>
            </div>
            <BentoGrid className="max-w-7xl mx-auto px-6">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

const RocketIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
