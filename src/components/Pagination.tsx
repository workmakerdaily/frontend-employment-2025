"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
    page: number;
    setPage: (page: number) => void;
}

const Pagination = ({ page, setPage }: Props) => {
    return (
        <div className="flex justify-center items-center mt-6 gap-4">
            {/* 이전 페이지 버튼 */}
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground
                        hover:bg-secondary/80 disabled:opacity-50"
            >
                <FiChevronLeft size={20} />
            </button>

            {/* 현재 페이지 번호 */}
            <span className="text-lg font-semibold bg-background text-foreground px-4 py-2 border border-border rounded-md">
                {page + 1}
            </span>

            {/* 다음 페이지 버튼 */}
            <button
                onClick={() => setPage(page + 1)}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground
                        hover:bg-secondary/80"
            >
                <FiChevronRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;
