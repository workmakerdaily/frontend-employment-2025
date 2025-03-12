"use client";

import { useEffect, useRef } from "react";

interface Props {
    page: number;
    setPage: (page: number) => void;
    isLoading: boolean;
}

// component: 무한 스크롤 //
const InfiniteScroll = ({ page, setPage, isLoading }: Props) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isLoading) return; // 로딩 중일 때는 실행하지 않음

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage(page + 1); // 다음 페이지 로드
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [page, isLoading, setPage]);

    return <div ref={observerRef} className="h-10 w-full" />;
};

export default InfiniteScroll;
