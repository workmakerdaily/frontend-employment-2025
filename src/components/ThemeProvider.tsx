"use client";

import { useEffect } from "react";
import useThemeStore from "@/store/themeStore";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return <>{children}</>;
};

export default ThemeProvider;
