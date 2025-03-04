"use client";

import Link from 'next/link';

const SideBar = () => {
    return (
        <aside className="w-60 bg-[#2C2F33] h-screen p-4 pt-4 text-white">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link href="/admin" className="menu-text block p-2">
                            관리자 
                        </Link>
                        <Link href="/admin/users" className="menu-text block p-2">
                            유저
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;