"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // 햄버거 메뉴 아이콘 추가
import Image from "next/image";
import Counter from "./Counter";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-[#383E42] p-4 gap-8 flex justify-start items-center w-full">
            <Link href="/" className="flex items-center mr-8">
                <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={140} height={80} className="mr-2" />
            </Link>
            <Counter />

            {/* 메뉴 토글 버튼 (화면이 작아질 때) */}
            <button
                className="md:hidden p-2 bg-gray-800 text-white rounded-md ml-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* 열기/닫기 아이콘 */}
            </button>

            {/* 모바일 메뉴 (햄버거 버튼 클릭 시 표시) */}
            {isOpen && (
                <div className="fixed inset-x-0 z-10 h-[36vh] top-20 bg-[#636769]  md:hidden">
                    <ul className="py-2">
                        <li>
                            <Link href="/pokemons" className="toggle" onClick={closeMenu}><span className="toggle-text">포켓몬</span></Link>
                        </li>
                        <li>
                            <Link href="/sign-in" className="toggle" onClick={closeMenu}><span className="toggle-text">로그인</span></Link>
                        </li>
                        <li>
                            <Link href="/sign-up" className="toggle" onClick={closeMenu}><span className="toggle-text">회원가입</span></Link>
                        </li>
                        <li>
                            <Link href="/admin" className="toggle" onClick={closeMenu}><span className="toggle-text">관리자</span></Link>
                        </li>
                        <li>
                            <Link href="/admin/users" className="toggle" onClick={closeMenu}><span className="toggle-text">유저</span></Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;