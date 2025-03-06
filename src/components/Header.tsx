"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 현재 경로 감지
import { FiMenu, FiX, FiHome, FiList, FiLogIn, FiUser, FiShield, FiUsers } from "react-icons/fi";
import Counter from "./Counter";
import useThemeStore from "@/store/themeStore";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useThemeStore();
    const closeMenu = () => setIsOpen(false);
    const pathname = usePathname(); // 현재 페이지 감지

    return (
        <>
            {/* 고정된 헤더 (사이드바 크기만큼 이동) */}
            <header className="fixed top-0 left-0 md:left-60 w-full md:w-[calc(100%-15rem)] z-40 p-4 flex justify-start items-center border-b bg-[#eeeeee] dark:bg-[#202225] text-foreground border-border">
                {/* 로고 */}
                <Link href="/" className="flex items-center mr-8">
                    <div className="md:ml-5 text-4xl">POKÉMON</div>
                </Link>

                <Counter />

                {/* 햄버거 메뉴 버튼 (모바일에서만 보임) */}
                <button
                    className={`md:hidden p-3 rounded-lg ml-auto transition-all duration-200 
                        bg-[#d1d1d1] dark:bg-[#545b60] text-white
                        hover:bg-[#b8b8b8] dark:hover:bg-[#474C50]`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </header>

            {/* 모바일 메뉴 (햄버거 버튼 클릭 시 표시) */}
            {isOpen && (
                <div className="fixed top-[80px] left-60 w-[calc(100%-15rem)] z-30 bg-white dark:bg-[#2C2F33] text-secondary-foreground md:hidden rounded-b-lg py-4 shadow-lg border border-border">
                    <ul className="space-y-3 text-center">
                        <li>
                            <Link
                                href="/"
                                className={`header-button ${pathname === "/" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiHome className="w-5 h-5 inline-block mr-2" /> 메인
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pokemons"
                                className={`header-button ${pathname === "/pokemons" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiList className="w-5 h-5 inline-block mr-2" /> 포켓몬
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/sign-in"
                                className={`header-button ${pathname === "/sign-in" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiLogIn className="w-5 h-5 inline-block mr-2" /> 로그인
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/sign-up"
                                className={`header-button ${pathname === "/sign-up" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiUser className="w-5 h-5 inline-block mr-2" /> 회원가입
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin"
                                className={`header-button ${pathname === "/admin" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiShield className="w-5 h-5 inline-block mr-2" /> 관리자
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/users"
                                className={`header-button ${pathname === "/admin/users" ? "active-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <FiUsers className="w-5 h-5 inline-block mr-2" /> 유저
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
