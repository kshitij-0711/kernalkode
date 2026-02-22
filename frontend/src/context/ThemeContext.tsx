'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName =
    | 'midnight-luxe'
    | 'soft-editorial'
    | 'cyber-noir';

export type VariantName = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8' | 'v9' | 'v10';

export interface ThemeInfo {
    name: ThemeName;
    label: string;
    description: string;
    vibe: string;
}

export const themes: ThemeInfo[] = [
    {
        name: 'midnight-luxe',
        label: 'Midnight Luxe',
        description: 'Refined elegance with gold accents',
        vibe: '🌙 Luxury',
    },
    {
        name: 'soft-editorial',
        label: 'Soft Editorial',
        description: 'Magazine-inspired warmth',
        vibe: '📰 Classic',
    },
    {
        name: 'cyber-noir',
        label: 'Cyber Noir',
        description: 'Elite digital aesthetics with striking neon accents',
        vibe: '⚡ Modern',
    }
];

const defaultTheme: ThemeName = 'cyber-noir';
const defaultVariant: VariantName = 'v5';

interface ThemeContextType {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;
    variant: VariantName;
    setVariant: (variant: VariantName) => void;
    themeInfo: ThemeInfo;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => { },
    variant: defaultVariant,
    setVariant: () => { },
    themeInfo: themes[0],
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeName>(defaultTheme);
    const [variant, setVariant] = useState<VariantName>(defaultVariant);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('webcraft-theme') as ThemeName | null;
        const savedVariant = localStorage.getItem('webcraft-variant') as VariantName | null;

        if (savedTheme && themes.some(t => t.name === savedTheme)) {
            setTheme(savedTheme);
        }
        if (savedVariant && ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10'].includes(savedVariant)) {
            setVariant(savedVariant);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('webcraft-theme', theme);
        }
    }, [theme, mounted]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('webcraft-variant', variant);
        }
    }, [variant, mounted]);

    const themeInfo = themes.find(t => t.name === theme) || themes[0];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, variant, setVariant, themeInfo }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
