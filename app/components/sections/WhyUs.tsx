"use client";

import { Card } from "@/app/components/ui/Card";
import { Zap, Brain, Rocket } from "lucide-react";

const features = [
    {
        icon: <Rocket className="w-8 h-8 text-[#FF1E1E]" />,
        title: "Startup DNA",
        headline: "Launch First, Fix Later.",
        description: "We take you from idea to market in 6-8 weeks. Speed is our currency, and we spend it wisely to get you traction.",
    },
    {
        icon: <Brain className="w-8 h-8 text-[#FF1E1E]" />,
        title: "AI Integration",
        headline: "Smart Brains Included.",
        description: "Dashboards that parse data and fill forms automatically, saving 80% of manual work. We build systems that think.",
    },
    {
        icon: <Zap className="w-8 h-8 text-[#FF1E1E]" />,
        title: "Partnership",
        headline: "We Are Your Co-Pilots.",
        description: "We don't just write code; we navigate the journey from 'what if' to 'heck yes'. Your success is our code.",
    },
];

export const WhyUs = () => {
    return (
        <section id="philosophy" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-sm font-bold text-[#FF1E1E] uppercase tracking-widest mb-2">Philosophy</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Why Dropdown Digital?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="h-full flex flex-col">
                            <div className="mb-6 p-3 bg-[#FF1E1E]/10 w-fit rounded-xl border border-[#FF1E1E]/20">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-[#FF1E1E] font-medium mb-4">{feature.headline}</p>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
