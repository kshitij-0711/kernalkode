'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName = 'soft-editorial';


export interface ThemeInfo {
    name: ThemeName;
    label: string;
    description: string;
    vibe: string;
}

export const themes: ThemeInfo[] = [
    {
        name: 'soft-editorial',
        label: 'Soft Editorial',
        description: 'Magazine-inspired warmth',
        vibe: '📰 Classic',
    }
];

const defaultTheme: ThemeName = 'soft-editorial';

interface ThemeContextType {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;

    themeInfo: ThemeInfo;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => { },
    themeInfo: themes[0],
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeName>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('boring-theme') as ThemeName | null;

        if (savedTheme && themes.some(t => t.name === savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('boring-theme', theme);
        }
    }, [theme, mounted]);

    const themeInfo = themes.find(t => t.name === theme) || themes[0];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeInfo }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
