"use client";

import { Card } from "@/app/components/ui/Card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "TexNexus ERP",
        category: "Industrial / Enterprise",
        description: "AI-powered ERP for the Bangladeshi Textile & Dyeing industry. Real-time defect detection & smart scheduling.",
        impact: "Digitized entire factory floors.",
        stat: "100% Digitized",
        image: "/placeholder-erp.jpg", // We'll assume a placeholder for now
        href: "#",
    },
    {
        title: "Data On Deck",
        category: "SaaS Analytics",
        description: "Advanced AI analytics platform. Dashboards that parse data and fill forms automatically.",
        impact: "Processes 1M+ records in <30 seconds.",
        stat: "1M+ Records",
        image: "/placeholder-saas.jpg",
        href: "#",
    },
    {
        title: "Urgent.ae",
        category: "Marketplace",
        description: "UAE-based Property & Auto marketplace with geospatial search and real-time updates.",
        impact: "1,000+ daily inquiries processed.",
        stat: "1k+ Daily Inquiries",
        image: "/placeholder-marketplace.jpg",
        href: "#",
    },
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-sm font-bold text-[#FF1E1E] uppercase tracking-widest mb-2">Portfolio</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">The Proof.</h3>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-[#FF1E1E] font-medium hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <Card key={index} className="p-0 overflow-hidden group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {/* Image Side */}
                                <div className="relative h-64 md:h-96 w-full bg-[#1A1A1A] overflow-hidden">
                                    {/* Placeholder visual since we don't have real images yet */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-bold">
                                        {project.title}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-50" />
                                </div>

                                {/* Content Side */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="text-[#FF1E1E] text-sm font-bold uppercase tracking-wider mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FF1E1E] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 mb-6 text-lg leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white/40 uppercase">Key Impact</span>
                                            <span className="text-[#FF1E1E] font-bold text-xl">{project.stat}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF1E1E] group-hover:border-[#FF1E1E] transition-all">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
