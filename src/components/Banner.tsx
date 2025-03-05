"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Banner = () => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch((prev) => !prev);
        }, 500); // 0.5초마다 글리치 효과

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden flex justify-center items-center bg-black">
            {/* 배너 이미지 */}
            <Image
                src="/main-banner.jpg"
                alt="Pokemon Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
            />

            {/* 글리치 효과 */}
            <div
                className={clsx(
                    "absolute inset-0 bg-transparent mix-blend-screen pointer-events-none",
                    glitch ? "animate-glitch" : ""
                )}
            />
        </div>
    );
};

export default Banner;
