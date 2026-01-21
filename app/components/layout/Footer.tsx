"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Globe, Mail, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#080808] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-6">
                        <div className="relative h-10 w-40 mb-6">
                            <Image
                                src="/Logo White Full.png"
                                alt="Dropdown Digital"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <h2 className="text-3xl font-bold max-w-md">
                            Ready to transform your ideas?
                        </h2>
                        <p className="text-white/60 max-w-sm">
                            We don't just write code; we navigate the journey from 'what if' to 'heck yes'.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/70">
                                <Mail className="w-5 h-5 text-[#FF1E1E] mt-0.5" />
                                <a href="mailto:hello.dropdowndigital@gmail.com" className="hover:text-white transition-colors">
                                    hello.dropdowndigital@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <MapPin className="w-5 h-5 text-[#FF1E1E] mt-0.5" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Connect</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                                    <Linkedin className="w-5 h-5 group-hover:text-[#FF1E1E] transition-colors" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                                    <Globe className="w-5 h-5 group-hover:text-[#FF1E1E] transition-colors" />
                                    Framer Website
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/40">
                        &copy; 2026 Dropdown Digital. Your Success is Our Code.
                    </p>
                    <div className="flex gap-6 text-sm text-white/40">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
