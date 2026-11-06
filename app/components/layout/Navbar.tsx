"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const reduced = useReducedMotion();
    const toggle = useRef<HTMLButtonElement>(null);
    const [active, setActive] = useState("");

    useEffect(() => {
        const sections = ["services", "portfolio", "philosophy"]
            .map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
        }, { rootMargin: "-80px 0px -55% 0px", threshold: 0 });
        sections.forEach(section => observer.observe(section));
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") { setMobileMenuOpen(false); toggle.current?.focus(); }
        };
        const desktop = window.matchMedia("(min-width: 768px)");
        const close = () => { if (desktop.matches) setMobileMenuOpen(false); };
        window.addEventListener("keydown", onKey);
        desktop.addEventListener("change", close);
        return () => { observer.disconnect(); window.removeEventListener("keydown", onKey); desktop.removeEventListener("change", close); };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ${scrolled ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
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
                    <Link href="#services" aria-current={active === "services" ? "location" : undefined} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#portfolio" aria-current={active === "portfolio" ? "location" : undefined} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="#philosophy" aria-current={active === "philosophy" ? "location" : undefined} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Why Us
                    </Link>
                    <Button size="sm" className="ml-4">
                        Start Project
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    ref={toggle}
                    type="button"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden text-white motion-button p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                id="mobile-menu"
                initial={false}
                animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                inert={!mobileMenuOpen}
                className="absolute top-20 left-0 right-0 bg-[#080808] md:hidden overflow-hidden shadow-2xl"
            >
                <div className="border-b border-white/10 p-6 flex flex-col gap-4">
                        <Link
                            href="#services" aria-current={active === "services" ? "location" : undefined}
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => { setMobileMenuOpen(false); toggle.current?.focus(); }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#portfolio" aria-current={active === "portfolio" ? "location" : undefined}
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => { setMobileMenuOpen(false); toggle.current?.focus(); }}
                        >
                            Work
                        </Link>
                        <Link
                            href="#philosophy" aria-current={active === "philosophy" ? "location" : undefined}
                            className="text-lg font-medium text-white/90 py-2 border-b border-white/5"
                            onClick={() => { setMobileMenuOpen(false); toggle.current?.focus(); }}
                        >
                            Why Us
                        </Link>
                        <Button className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); toggle.current?.focus(); }}>
                            Start Project
                        </Button>
                </div>
            </motion.div>
        </nav>
    );
};
