"use client";

import { InputHTMLAttributes } from "react";

// interface: Input 컴포넌트의 Props //
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

// component: Input 컴포넌트 //
export default function Input({ label, ...props }: Props) {

    // render: Input 컴포넌트 렌더링 //
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            <input
                {...props}
                className="w-full px-4 py-2 mt-1 text-lg bg-secondary text-secondary-foreground rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}
