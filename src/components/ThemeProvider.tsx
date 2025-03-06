"use client";

import { useEffect } from "react";
import useThemeStore from "@/store/themeStore";

// component: ThemeProvider 컴포넌트 //
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    // context: 테마 상태 가져오기 //
    const { theme } = useThemeStore();

    // effect: 테마 변경 시 HTML 태그 클래스 업데이트 //
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    // render: 자식 컴포넌트 감싸기 //
    return <>{children}</>;
};

export default ThemeProvider;
