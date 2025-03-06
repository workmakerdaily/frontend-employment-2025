"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

// component: Banner 컴포넌트 //
const Banner = () => {

    // state: 글리치 효과 활성화 여부 //
    const [glitch, setGlitch] = useState(false);

    // effect: 글리치 효과 일정 간격으로 토글 //
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch((prev) => !prev);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    // render: Banner 컴포넌트 렌더링 //
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden flex justify-center items-center bg-black">

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
