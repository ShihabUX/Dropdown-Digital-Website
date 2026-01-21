"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(255, 30, 30, 0.15)" }}
                className={cn(
                    "bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden group",
                    className
                )}
                {...props}
            >
                {/* Subtle red glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1E1E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        );
    }
);
Card.displayName = "Card";
