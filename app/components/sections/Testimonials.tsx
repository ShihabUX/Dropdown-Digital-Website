"use client";

import { Quote } from "lucide-react";
import { Card } from "@/app/components/ui/Card";

export const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF1E1E]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <Card className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center">
                    <div className="flex justify-center mb-8">
                        <Quote className="w-12 h-12 text-[#FF1E1E]/40" />
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                        "Dropdown Digital transformed our complex data requirements into an elegant platform. They didn't just build it; they became our tech partners."
                    </blockquote>
                    <cite className="not-italic flex flex-col items-center gap-2">
                        <span className="font-bold text-white text-lg">Founder</span>
                        <span className="text-[#FF1E1E] font-bold text-sm uppercase tracking-widest">Data On Deck</span>
                    </cite>
                </Card>
            </div>
        </section>
    );
};
