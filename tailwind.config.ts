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
            }
        }
    },
    variants: {
        animation: ["motion-safe"],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            // {
            //   whizworks: {
            //     "primary": "#ec3750",
            //     "secondary": "#3c4858",
            //     "accent": "#338eda",
            //     "placeholder": "#8492a6",
            //   }
            // },
            "pastel",
        ]
    }
};

export default config;
