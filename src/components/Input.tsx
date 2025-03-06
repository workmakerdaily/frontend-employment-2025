"use client";

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, ...props }: Props) {
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
