"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // 햄버거 메뉴 아이콘 추가
import Image from "next/image";
import Counter from "./Counter";
import useThemeStore from "@/store/themeStore";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useThemeStore();
    
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`p-4 gap-8 flex justify-start items-center w-full border-b bg-background text-foreground border-border`}>
            <Link href="/" className="flex items-center mr-8">
                <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={140} height={80} className="mr-2" />
            </Link>
            <Counter />

            {/* 메뉴 토글 버튼 (화면이 작아질 때) */}
            <button
                className="md:hidden p-2 bg-primary text-primary-foreground rounded-md ml-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* 열기/닫기 아이콘 */}
            </button>

            {/* 모바일 메뉴 (햄버거 버튼 클릭 시 표시) */}
            {isOpen && (
                <div className="fixed inset-x-0 z-10 h-[36vh] top-20 bg-background text-secondary-foreground md:hidden">
                    <ul className="py-2">
                    <li>
                            <Link href="/pokemons" className="header-menu block p-2 rounded-md bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground" onClick={closeMenu}>포켓몬</Link>
                        </li>
                        <li>
                            <Link href="/sign-in" className="header-menu block p-2 rounded-md bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground" onClick={closeMenu}>로그인</Link>
                        </li>
                        <li>
                            <Link href="/sign-up" className="header-menu block p-2 rounded-md bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground" onClick={closeMenu}>회원가입</Link>
                        </li>
                        <li>
                            <Link href="/admin" className="header-menu block p-2 rounded-md bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground" onClick={closeMenu}>관리자</Link>
                        </li>
                        <li>
                            <Link href="/admin/users" className="header-menu block p-2 rounded-md bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground" onClick={closeMenu}>유저</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
