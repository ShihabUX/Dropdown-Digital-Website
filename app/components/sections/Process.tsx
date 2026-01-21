"use client";

import { Card } from "@/app/components/ui/Card";
import { Search, PenTool, Hammer, Rocket } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Discovery",
        description: "We analyze goals and roadmap the tech.",
        icon: <Search className="w-6 h-6 text-[#FF1E1E]" />,
    },
    {
        step: "02",
        title: "Design",
        description: "High-fidelity mockups with a focus on UX logic.",
        icon: <PenTool className="w-6 h-6 text-[#FF1E1E]" />,
    },
    {
        step: "03",
        title: "Agile Build",
        description: "Sprints with regular demos (launch in 6-8 weeks).",
        icon: <Hammer className="w-6 h-6 text-[#FF1E1E]" />,
    },
    {
        step: "04",
        title: "Scale",
        description: "Post-launch support and infrastructure optimization.",
        icon: <Rocket className="w-6 h-6 text-[#FF1E1E]" />,
    },
];

export const Process = () => {
    return (
        <section className="py-24 relative bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold text-[#FF1E1E] uppercase tracking-widest mb-2">How We Work</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">From Concept to Code.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, index) => (
                        <Card key={index} className="relative group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-6 right-6 text-4xl font-bold text-white/5 select-none">{item.step}</div>
                            <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/10 flex items-center justify-center mb-6 border border-[#FF1E1E]/20">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
