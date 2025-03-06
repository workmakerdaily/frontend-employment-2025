import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background text-foreground p-4">
            <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>

            <div className="space-y-4 w-full max-w-md">
                <Link href="/admin/users">
                    <div className="border p-4 rounded-lg bg-card text-card-foreground hover:bg-secondary transition text-center">
                        유저 목록 관리
                    </div>
                </Link>
            </div>
        </div>
    );
}
