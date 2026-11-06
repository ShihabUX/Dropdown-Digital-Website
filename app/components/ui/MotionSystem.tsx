"use client";

import { useEffect } from "react";
import { animate, inView, MotionConfig } from "framer-motion";

export const motionEase = [0.22, 1, 0.36, 1] as const;

/** Progressive enhancement: server markup is visible, even without JavaScript. */
export function MotionSystem({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        let cleanup = () => {};
        const start = () => {
            cleanup();
            if (preference.matches) return;
            const running: ReturnType<typeof animate>[] = [];
            const elements = new Set<Element>();
            const reveal = (element: Element, delay = 0) => {
                elements.add(element);
                running.push(animate(element, { opacity: [0, 1], y: [16, 0] }, {
                    duration: 0.6, delay, ease: motionEase,
                }));
            };
            document.querySelectorAll("[data-hero]").forEach((el, i) => reveal(el, i * 0.065));
            const stop = inView("[data-reveal]", (el) => {
                reveal(el, Number(el.getAttribute("data-delay") || 0));
            }, { margin: "0px 0px -32px 0px" });
            cleanup = () => {
                stop();
                running.forEach(animation => animation.stop());
                elements.forEach(el => {
                    const node = el as HTMLElement;
                    node.style.opacity = "";
                    node.style.transform = "";
                });
            };
        };
        start();
        preference.addEventListener("change", start);
        return () => { cleanup(); preference.removeEventListener("change", start); };
    }, []);
    return <MotionConfig reducedMotion="user" transition={{ duration: 0.2, ease: motionEase }}>{children}</MotionConfig>;
}
