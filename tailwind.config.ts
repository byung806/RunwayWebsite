import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './ui/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                }
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255, 255, 255, 0.5)",
                    "0 0px 65px rgba(255, 255, 255, 0.3)"
                ]
            }
        }
    },
    variants: {
        animation: ["motion-safe"],
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
};

export default config;
