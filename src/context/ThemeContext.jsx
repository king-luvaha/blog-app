"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light"; // Default theme if server-side
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
