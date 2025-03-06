"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
    return (
        <button
            {...props}
            className="w-full px-6 py-3 text-lg font-semibold text-white bg-[#afb1b1] dark:bg-[#3b3c3c] rounded-lg hover:opacity-80"
        >
            {children}
        </button>
    );
}
