"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// interface: Pagination 컴포넌트의 Props //
interface Props {
    page: number;
    setPage: (page: number) => void;
}

// component: Pagination 컴포넌트 //
const Pagination = ({ page, setPage }: Props) => {

    // render: Pagination 컴포넌트 렌더링 //
    return (
        <div className="flex justify-center items-center mt-6 gap-4">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground
                        hover:bg-secondary/80 disabled:opacity-50"
            >
                <FiChevronLeft size={20} />
            </button>

            <span className="text-lg font-semibold bg-background text-foreground px-4 py-2 border border-border rounded-md">
                {page + 1}
            </span>

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
