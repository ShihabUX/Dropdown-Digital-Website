import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-none bg-[#121212] border border-white/5 justify-between flex flex-col space-y-4 p-6 relative overflow-hidden",
                className
            )}
        >
            {/* Subtle red glow on hover - duplicating effect from Card to ensure consistency if used standalone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF1E1E]/5 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 transition duration-200 group-hover/bento:-translate-y-1">
                {header && <div className="mb-4">{header}</div>}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon && <div className="mb-2 text-[#FF1E1E]">{icon}</div>}
                    <div className="font-sans font-bold text-white mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-body font-normal text-white/60 text-sm">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
