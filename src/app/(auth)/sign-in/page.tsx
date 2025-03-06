"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

// component: 로그인 페이지 //
export default function SignIn() {

    // state: 이메일 및 비밀번호 상태 //
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // event handler: 로그인 폼 제출 처리 //
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("로그인 요청:", { email, password });
    };

    // render: 로그인 페이지 렌더링 //
    return (
        <div className="flex min-h-screen items-start justify-center p-4 bg-background text-foreground">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg border-2 dark:border-[#312e2e]">
                <h2 className="text-3xl font-bold text-center">로그인</h2>

                <form className="space-y-4" onSubmit={submitHandler}>
                    <Input
                        label="이메일"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="비밀번호"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">로그인</Button>
                </form>

                <p className="text-center text-sm mt-4">
                    계정이 없으신가요?{" "}
                    <Link href="/sign-up" className="text-primary hover:underline">
                        회원가입
                    </Link>
                </p>
            </div>
        </div>
    );
}
