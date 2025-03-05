"use client";

interface Props {
    page: number;
    setPage: (page: number) => void;
}

const Pagination = ({ page, setPage }: Props) => {
    return (
        <div className="flex justify-center mt-4 gap-4">
            {/* 이전 페이지 버튼 */}
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                Previous
            </button>

            <span className="text-lg font-medium">Page {page + 1}</span>

            {/* 다음 페이지 버튼 */}

            <button onClick={() => setPage(page + 1)}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
