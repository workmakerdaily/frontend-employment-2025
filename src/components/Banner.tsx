"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Banner = () => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch((prev) => !prev);
        }, 1200); // 글리치 간격 유지

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden flex justify-center items-center bg-black">
            {/* 배너 이미지 */}
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src="/main-banner.jpg"
                    alt="Pokemon Banner"
                    layout="fill"
                    objectFit="cover"
                    className={clsx(
                        "absolute inset-0 w-full h-full object-cover transition-transform duration-150 scale-[1.02]", 
                        glitch ? "animate-fixed-glitch" : ""
                    )}
                />
            </div>

            {/* 글리치 텍스트 */}
            <h1 className={clsx(
                "absolute text-white dark:text-black text-3xl sm:text-5xl font-semibold glitch-text",
                glitch ? "animate-fixed-glitch-text" : ""
            )}>
                Hello World!
            </h1>
        </div>
    );
};

export default Banner;
