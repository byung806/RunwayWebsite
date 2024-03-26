'use client'  // i don't know what this does but an error told me to add it

import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const handleScroll = () => {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                if (isVisible) {
                    // only animate once
                    setIsVisible(true);
                }
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const className = isVisible ? "motion-safe:animate-fadeIn" : "";

    return <div ref={ref} className={className}>{children}</div>;
};

export default RevealOnScroll;
