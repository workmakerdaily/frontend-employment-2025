"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiList, FiLogIn, FiUser, FiShield, FiUsers } from "react-icons/fi";

const SideBar = () => {
    const pathname = usePathname(); // 현재 경로 감지

    return (
        <aside className="fixed top-0 left-0 h-full w-60 bg-background hidden md:block dark:bg-[#2C2F33] text-foreground border-r border-border pt-[80px] p-4 z-50">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link
                            href={pathname === "/" ? "#" : "/"}
                            className={`side-button ${pathname === "/" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/"}
                        >
                            <FiHome className="w-5 h-5" /> 메인
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={pathname === "/pokemons" ? "#" : "/pokemons"}
                            className={`side-button ${pathname === "/pokemons" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/pokemons"}
                        >
                            <FiList className="w-5 h-5" /> 포켓몬
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={pathname === "/sign-in" ? "#" : "/sign-in"}
                            className={`side-button ${pathname === "/sign-in" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/sign-in"}
                        >
                            <FiLogIn className="w-5 h-5" /> 로그인
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={pathname === "/sign-up" ? "#" : "/sign-up"}
                            className={`side-button ${pathname === "/sign-up" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/sign-up"}
                        >
                            <FiUser className="w-5 h-5" /> 회원가입
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={pathname === "/admin" ? "#" : "/admin"}
                            className={`side-button ${pathname === "/admin" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/admin"}
                        >
                            <FiShield className="w-5 h-5" /> 관리자
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={pathname === "/admin/users" ? "#" : "/admin/users"}
                            className={`side-button ${pathname === "/admin/users" ? "active-button" : ""}`}
                            aria-disabled={pathname === "/admin/users"}
                        >
                            <FiUsers className="w-5 h-5" /> 유저
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
