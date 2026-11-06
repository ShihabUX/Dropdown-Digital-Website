"use client";

import { Button } from "@/app/components/ui/Button";


export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#FF1E1E]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF1E1E]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div
                    className="z-10"
                >
                    <div data-hero className="inline-block px-3 py-1 bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 rounded-full mb-6">
                        <span className="text-[#FF1E1E] text-xs font-bold uppercase tracking-wider">Startup Hustle • Enterprise Stability</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        <span data-hero className="block">Remote Control for</span> <span data-hero className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Your Business.</span>
                    </h1>

                    <p data-hero className="text-lg md:text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
                        We build powerful web admin dashboards and scalable MVPs. Launch your startup fast, or upgrade your enterprise with AI brains.
                    </p>

                    <div data-hero className="flex flex-wrap gap-4">
                        <Button size="lg">Start Your Project</Button>
                        <Button size="lg" variant="outline">View Our Work</Button>
                    </div>
                </div>

                {/* 3D Dashboard Visual */}
                <div
                    data-hero className="relative z-10 perspective-1000"
                >
                    {/* Tilted Container */}
                    <div
                        className="hero-artwork relative w-full aspect-[4/3] bg-[#121212] border border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden"
                        style={{
                            boxShadow: "20px 20px 60px rgba(0,0,0,0.5), -5px -5px 20px rgba(255,255,255,0.02)"
                        }}
                    >
                        {/* Mock Dashboard UI */}
                        <div className="w-full h-full bg-[#080808] rounded-xl overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            {/* Body */}
                            <div className="flex-1 p-4 grid grid-cols-12 gap-4">
                                {/* Sidebar */}
                                <div className="col-span-3 bg-[#121212] rounded-lg hidden md:block"></div>
                                {/* Main Content */}
                                <div className="col-span-12 md:col-span-9 space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-24 bg-[#121212] rounded-lg border border-white/5"></div>
                                        <div className="h-24 bg-[#121212] rounded-lg border border-white/5"></div>
                                        <div className="h-24 bg-[#121212] rounded-lg border border-white/5"></div>
                                    </div>
                                    <div className="h-40 bg-[#121212] rounded-lg border border-white/5 relative overflow-hidden">
                                        {/* Chart Mockup */}
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FF1E1E]/20 to-transparent clip-path-polygon" />
                                    </div>
                                    <div className="h-40 bg-[#121212] rounded-lg border border-white/5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Glowing Badge */}
                        <div className="absolute top-6 right-6 px-3 py-1 bg-[#FF1E1E] text-white text-xs font-bold rounded shadow-[0_0_15px_#FF1E1E]">
                            LIVE DATA
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div
                        className="absolute -bottom-6 left-0 lg:-left-10 w-48 p-4 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-xl z-20 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center text-[#FF1E1E] text-xs font-bold">AI</div>
                            <div className="text-sm font-bold text-white">Analysis</div>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-[#FF1E1E]" />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-white/50">
                            <span>Processing...</span>
                            <span>85%</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-[#FF1E1E] rounded-full" />
                </div>
            </div>
        </section>
    );
};
