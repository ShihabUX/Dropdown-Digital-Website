"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-40">
                        <Image
                            src="/Logo White Full.png"
                            alt="Dropdown Digital"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="#philosophy" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Why Us
                    </Link>
                    <Button size="sm" className="ml-4">
                        Start Project
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-[#080808] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        <Link
                            href="#services"
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="#portfolio"
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Work
                        </Link>
                        <Link
                            href="#philosophy"
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why Us
                        </Link>
                        <Button className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                            Start Project
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
