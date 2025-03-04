"use client";

import { useState, useEffect } from "react";
import useThemeStore from "@/store/themeStore";
import "@/app/globals.css";

export default function Counter() {
    const [count, setCount] = useState<number | null>(null); // 초기 값 null로 설정
    const { theme, toggleTheme } = useThemeStore();

    // useEffect에서 localStorage 값을 가져옴 (클라이언트에서 실행)
    useEffect(() => {
        const storedCount = Number(localStorage.getItem("count")) || 0;
        setCount(storedCount);
    }, []);

    useEffect(() => {
        if (count !== null) {
            localStorage.setItem("count", count.toString());
            toggleTheme(count);
        }
    }, [count, toggleTheme]);

    if (count === null) {
        return <div className="text-sm text-gray-500">Loading...</div>;
    }

    return (
        <div className="flex items-center gap-2 bg-background text-foreground p-2 rounded-md border border-border">
            <button
                className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded-md disabled:opacity-50"
                onClick={() => setCount((prev) => (prev !== null && prev < 10 ? prev + 1 : prev))}
                disabled={count >= 10}
            >
                ＋
            </button>
            <span className="text-sm font-medium">{count}</span>
            <button
                className="px-2 py-1 text-sm bg-destructive text-destructive-foreground rounded-md disabled:opacity-50"
                onClick={() => setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                disabled={count <= 0}
            >
                －
            </button>
        </div>
    );
}
