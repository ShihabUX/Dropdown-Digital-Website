"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
        const variants = {
            primary: "bg-[#FF1E1E] text-white hover:bg-[#D91515] shadow-[0_0_15px_rgba(255,30,30,0.3)]",
            outline: "bg-transparent border border-white/20 text-white hover:border-[#FF1E1E] hover:text-[#FF1E1E]",
            ghost: "bg-transparent text-white/70 hover:text-white",
        };

        const sizes = {
            default: "h-12 px-6 py-3 text-base",
            sm: "h-9 px-4 text-sm",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E1E] disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
