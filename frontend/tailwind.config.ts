import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                text: "var(--text)",
                "text-muted": "var(--text-muted)",
                border: "var(--border)",
                "border-hover": "var(--border-hover)",
            },
            fontFamily: {
                sans: ["var(--font-jetbrains-mono)", "monospace"],
                serif: ["var(--font-jetbrains-mono)", "monospace"],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                marqueeRight: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                "fade-in": {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
            animation: {
                marquee: 'marquee 45s linear infinite',
                marqueeRight: 'marqueeRight 45s linear infinite',
                'fade-in': 'fade-in 1s ease-out forwards',
            }
        },
    },
    plugins: [],
};
export default config;
