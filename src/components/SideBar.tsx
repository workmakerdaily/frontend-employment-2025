"use client";

import Link from 'next/link';
import { FiHome, FiList, FiLogIn, FiUser, FiShield, FiUsers } from "react-icons/fi";

const SideBar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-60 bg-background hidden md:block dark:bg-[#2C2F33] text-foreground border-r border-border pt-[80px] p-4 z-50">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link href="/" className="side-button">
                            <FiHome className="w-5 h-5" /> 메인
                        </Link>
                    </li>
                    <li>
                        <Link href="/pokemons" className="side-button">
                            <FiList className="w-5 h-5" /> 포켓몬
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-in" className="side-button">
                            <FiLogIn className="w-5 h-5" /> 로그인
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-up" className="side-button">
                            <FiUser className="w-5 h-5" /> 회원가입
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin" className="side-button">
                            <FiShield className="w-5 h-5" /> 관리자
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users" className="side-button">
                            <FiUsers className="w-5 h-5" /> 유저
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
