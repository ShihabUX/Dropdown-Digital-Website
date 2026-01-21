"use client";

import { Card } from "@/app/components/ui/Card";

const stats = [
    {
        value: "1M+",
        label: "Records Processed Daily (AI Parsing)",
    },
    {
        value: "80%",
        label: "Reduction in Manual Data Entry",
    },
    {
        value: "100%",
        label: "On-Time MVP Delivery",
    },
];

export const Stats = () => {
    return (
        <section className="py-10 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="flex flex-col items-center justify-center text-center py-10 border-white/5 bg-white/[0.02]">
                            <span className="text-4xl md:text-5xl font-bold text-[#FF1E1E] mb-2">{stat.value}</span>
                            <span className="text-white/60 font-medium">{stat.label}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
