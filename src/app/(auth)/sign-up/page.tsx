"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

// component: 회원가입 페이지 //
export default function SignUp() {

    // state: 회원가입 폼 입력 상태 //
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // event handler: 회원가입 폼 제출 처리 //
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        console.log("회원가입 요청:", { email, name, password });
    };

    // render: 회원가입 페이지 렌더링 //
    return (
        <div className="flex min-h-screen items-start justify-center p-4 bg-background text-foreground">
            <div className="w-full max-w-md p-8 space-y-6 rounded-lg border-2 dark:border-[#312e2e]">
                <h2 className="text-3xl font-bold text-center">회원가입</h2>

                <form className="space-y-4" onSubmit={submitHandler}>
                    <Input
                        label="이메일"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="이름"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        label="비밀번호"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        label="비밀번호 확인"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">회원가입</Button>
                </form>

                <p className="text-center text-sm mt-4">
                    이미 계정이 있으신가요?{" "}
                    <Link href="/sign-in" className="text-primary hover:underline">
                        로그인
                    </Link>
                </p>
            </div>
        </div>
    );
}
