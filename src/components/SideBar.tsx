"use client";

import Link from 'next/link';

const SideBar = () => {
    return (
        <aside className="w-60 bg-blue-300 h-screen p-4 text-white">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link href="/dashboard" className="block p-2 hover:bg-blue-400 rounded">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="block p-2 hover:bg-blue-400 rounded">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="block p-2 hover:bg-blue-400 rounded">
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;