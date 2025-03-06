"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeStore from "@/store/themeStore";
import "@/app/globals.css";

// component: Counter 컴포넌트 //
const Counter = () => {

    // state: 카운트 상태 관리 //
    const [count, setCount] = useState<number | null>(null);

    // context: 테마 상태 및 테마 변경 함수 //
    const { theme, toggleTheme } = useThemeStore();

    // effect: localStorage에서 카운트 값 불러오기 //
    useEffect(() => {
        const storedCount = Number(localStorage.getItem("count")) || 0;
        setCount(storedCount);
    }, []);

    // effect: 카운트 값 변경 시 localStorage 저장 & 테마 변경 //
    useEffect(() => {
        if (count !== null) {
            localStorage.setItem("count", count.toString());
            toggleTheme(count);
        }
    }, [count, toggleTheme]);

    if (count === null) {
        return <div className="text-sm text-gray-500">Loading...</div>;
    }

    // render:  Counter 컴포넌트 렌더링링 //
    return (
        <div className="flex items-center gap-2 bg-background text-foreground p-2 rounded-md border border-border">
            <button
                className="toggle-button"
                onClick={() => setCount((prev) => (prev !== null && prev < 10 ? prev + 1 : prev))}
                disabled={count >= 10}
            >
                <FiMoon size={18} />
            </button>
            <span className="text-sm font-medium w-[12px] text-center">{count}</span>
            <button
                className="toggle-button"
                onClick={() => setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                disabled={count <= 0}
            >
                <FiSun size={18} />
            </button>
        </div>
    );
}

export default Counter;